export default function initRequestController(db) {
  const submitRequest = async (request, response) => {
    console.log('login controlling printing request...')
    console.log(request.body);
    // try {
    //   const requestSubmitted = await db.Request.create({
    //     where: {
    //       email: request.body.email,
    //       password: request.body.password,
    //     }
    //   });
    //   response.send( requestSubmitted );
    // } catch (error) {
    //   console.log(error);
    //   response.send(error);
    // }
  };

  return {
    submitRequest,
  };
}
