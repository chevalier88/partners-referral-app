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

      console.log('do we even get here?');
      console.log(newRequest);
      const { id } = newRequest;
      console.log(id);

      // db.Request.findByPk(id).then( async(request) => {
      //   try{
      //     await request.setRegions(regions_id); // 3 relationship are in db 
      //   } catch(e){
      //     console.error(e);
      //   }
      // });
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
