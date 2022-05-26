export default function initRequestController(db) {
  const submitRequest = async (request, response) => {
    console.log('login controlling printing request...')
    console.log(request.body);
    try {
      const {referring_employee_id, employee_numbers, entities_existing, comments, request_addressed, services_id, regions_id } = request.body;
      console.log(`employee_numbers: ${employee_numbers}`);
      console.log('regions_id:')
      console.log(regions_id);
      
      const newRequest = await db.Request.create({
        referring_employee_id,
        employee_numbers: Number(employee_numbers),
        entities_existing,
        comments,
        request_addressed,
        services_id: Number(services_id),
      });

      const { id } = newRequest;

      console.log(id);
      // await request.body.newRequest.id
      // response.send( requestSubmitted );
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  return {
    submitRequest,
  };
}
