export default function initPartnerController(db) {
  const getAssignedPartnerNameById = async (request, response) => {
    console.log('getting an assigned partner request...')
    console.log(request.params.id);
    try {
      const assignedPartnerName = await db.Partner.findByPk(Number(request.params.id));
      response.send( assignedPartnerName );
    } catch (error) {
      console.log(error);
      response.send(error);
    }
  };

  return {
    getAssignedPartnerNameById,
  };
}
