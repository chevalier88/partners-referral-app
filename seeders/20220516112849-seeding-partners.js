module.exports = {
  up: async (queryInterface) => {
    // Define category data
    const partners = [
      {
        name: 'Hawksford Singapore Pte. Ltd.',
        user_id: 1,
        primary_contact_name: 'Dario Acconci',
        primary_contact_email: 'dario.acconci@hawksford.com',
        secondary_contact_name: 'Gwen Gingoyon',
        secondary_contact_email: 'gwen.gingoyon@hawksford.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'TMF Group Asia',
        user_id: 3,
        primary_contact_name: 'Bill Dekker',
        primary_contact_email: 'bill.dekker@tmf-group.com',
        secondary_contact_name: '',
        secondary_contact_email: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'PKF Shiodome Partners Ltd',
        user_id: 4,
        primary_contact_name: 'Alex Hotta',
        primary_contact_email: 'alex.hotta@pkfsp.com',
        secondary_contact_name: 'Jun Kurozumi',
        secondary_contact_email: 'jun.kurozumi@pkfsp.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Take5 People Limited',
        user_id: 6,
        primary_contact_name: 'Alsen Hsien',
        primary_contact_email: 'alsen@take5people.com',
        secondary_contact_name: '',
        secondary_contact_email: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Y&Archer Inc.',
        user_id: 5,
        primary_contact_name: 'Jino Sin',
        primary_contact_email: 'sm@ynarcher.com',
        secondary_contact_name: '',
        secondary_contact_email: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    queryInterface.bulkInsert('partners', partners);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('partners', null);
  },
};