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

      await newRequest.addRegions(regions);

      response.send( 200 );
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  return {
    submitRequest,
  };
}
