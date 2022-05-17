export default function initLoginController(db) {
  const submitLogin = async (request, response) => {
    console.log('login controlling printing request...')
    console.log(request.body);
    try {
      const loginSubmitted = await db.User.findOne({
        where: {
          email: request.body.email,
          password: request.body.password,
        }
      });
      response.send( loginSubmitted );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    submitLogin,
  };
}
