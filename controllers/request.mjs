import { unique } from "webpack-merge";

export default function initRequestController(db) {
  const submitRequest = async (request, response) => {
    console.log('login controlling printing request...')
    console.log(request.body);
    try {
      const {userId, employeeNumbers, entitiesExisting, comments, requestAddressed, serviceId, regions } = request.body;
      console.log(`employeeNumbers: ${employeeNumbers}`);
      console.log('regions:')
      console.log(regions);
      
      const newRequestObject = {
        userId: userId,
        employeeNumbers: Number(employeeNumbers),
        entitiesExisting: entitiesExisting,
        comments: comments,
        requestAddressed: requestAddressed,
        serviceId: Number(serviceId),
        partnerId: null,
      };

      console.log('printing newRequestObject:');
      console.log(newRequestObject);

      const newRequest = await db.Request.create(newRequestObject);

      const { id } = newRequest;
      console.log(`submitted request id: ${id}`);

      // await newRequest.addRegions(regions);

      await regions.forEach((region) => {
        console.log(region);
        db.RequestRegion.create({
          requestId: id,
          regionId: Number(region),
        });
      });

      response.sendStatus( 200 );
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  const getAllRequests = async (request, response) => {
    try {
      const requests = await db.Request.findAll({
        include:[
          db.User,
          db.Service,
          db.RequestRegion,
          {
            model: db.Region,
          },
        ]
      });
      console.log(requests[0].user.name);

      console.log('printing after the appending...');
      response.send(requests);

    } catch (error) {
      console.log(error);
    };
  }

  // There's a lot going on here so comments are necessary
  // This controller function will look at one request, 
  // trace it through the many to many table (using eager loading)
  // and then trace through another many to many table
  // before finally pulling out relevant rows 
  // which contain the critical Partner name and identity
  // with which we will in turn assign requests to. 
  // This is the core of the whole App.

  const getPartnersForOneRequest = async (request, response) => {
    console.log('getting single row request body...');
    console.log(request.params.id);
    try {
      const oneRequest = await db.Request.findOne(
        {
          where: {id: request.params.id},
          include: [
            db.RequestRegion,
            db.Service,
          ]
        }
      );

      const serviceId = oneRequest.serviceId;

      const regionIds = [];

      oneRequest.requests_regions.forEach((entry) => {
        regionIds.push(entry.regionId);
      })

      console.log(regionIds);

      const getPartners = await db.Coverage.findAll(
        {
          where: {
            serviceId: serviceId,
            regionId: regionIds,  
          },
          include: [
            db.Partner,
          ]
        }
      );

      const rawPartners = [];

      getPartners.forEach((entry) => {
        rawPartners.push(entry.dataValues.partner.dataValues);
      })

      const uniqueArrayOfPartners = rawPartners.filter((value, index) => 
      {
        const _value = JSON.stringify(value);
        return index === rawPartners.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
      });

      console.log(uniqueArrayOfPartners);
      response.send(uniqueArrayOfPartners);


    } catch (error) {
      console.log(error);
    };
  }

  const updateRequestAfterAssigning = async (request, response) => {
    try {
      console.log('receiving update 1 request...');
      console.log(request.body);

      const partnerId = Number(request.body.partnerId);
      const requestId = request.body.requestId;
 
      if (partnerId === 0){
        console.log("null partnerId detected")
        console.log(`requestId: ${requestId}, partnerId: ${partnerId}`);

        const updateOneRequest = await db.Request.update(
          { 
            requestAddressed: true,
          },
          {
            where: {
              id : requestId,
            }
          }
        );
        console.log(updateOneRequest);
        response.send(updateOneRequest);

      } else if (partnerId !== null) {
        console.log(`partnerId is ${partnerId}, type ${typeof(partnerId)}`);
        const updateOneRequest = await db.Request.update(
          { 
            requestAddressed: true,
            partnerId: partnerId,
          },
          {
            where: {
              id : requestId,
            },
            include: {
              model: db.Partner,
            }
          },
        );
        console.log(updateOneRequest);
        response.send(updateOneRequest);
      }
    } catch (error) {
      console.log(error);
    };
  }

  const deleteOneRequest = async (request, response) => {
    try {
      console.log('deleting one request...');
      const requestId = request.params.id;
      console.log('printing requestId...');
      console.log(requestId);

      const deleteJoin = await db.RequestRegion.destroy({
        where : {
          requestId: request.params.id
        }
      })

      const deletedRequest = await db.Request.destroy({
        where : {
          id: requestId,
        },
        include:{
          model: db.RequestRegion,
        },
      });
      console.log(deletedRequest);
    } catch (error) {
      console.log(error);
    };
  }
  return {
    submitRequest, 
    getAllRequests, 
    getPartnersForOneRequest, 
    updateRequestAfterAssigning,
    deleteOneRequest,
  };
}
