export default function initRequestController(db) {
  const submitRequest = async (request, response) => {
    console.log('login controlling printing request...')
    console.log(request.body);
    try {
      const {referring_employee_id, employee_numbers, entities_existing, comments, request_addressed, services_id, regions_id } = request.body;
      console.log(`employee_numbers: ${employee_numbers}`);
      console.log('regions_id:')
      console.log(regions_id);
      
      const newRequestObject = {
        referring_employee_id: referring_employee_id,
        employee_numbers: Number(employee_numbers),
        entities_existing: entities_existing,
        comments: comments,
        request_addressed: request_addressed,
        services_id: Number(services_id),
        partner_id: null,
        // created_at: new Date(),
        // updated_at: new Date(),
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
