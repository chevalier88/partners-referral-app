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

      response.send( 200 );
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
            // include: [{
            //   model: db.Coverage, 
            //   include: [
            //     db.Service, 
            //     {
            //       model: db.Partner,
            //       include: db.User 
            //     }
            //   ],
            // }]
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
  return {
    submitRequest, getAllRequests, getPartnersForOneRequest
  };
}
