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
        include:{
          model: db.User,
        }
      });

      console.log(requests[0].user.name);

      // const test = await requests.forEach((request) => {
      //   db.Service.findOne({
      //     where: {
      //       id : request.dataValues.serviceId,
      //     }
      //   }).then((oneServiceResult) => {
      //     console.log(oneServiceResult.dataValues.name);
      //     request.dataValues["serviceName"] = oneServiceResult.dataValues.name;
      //     console.log(request);
      //     parsedRequests.push(request.dataValues);
      //     console.log(parsedRequests);
      //   }).catch((error) => console.log(error));
      // });

      console.log('printing after the appending...');
      response.send(requests);

    } catch (error) {
      console.log(error);
    };
  }
  return {
    submitRequest, getAllRequests
  };
}
