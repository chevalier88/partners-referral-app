import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initRequestModel from './request.mjs';
import initPartnerModel from './partner.mjs';
import initRegionModel from './region.mjs';
import initServiceModel from './service.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Partner = initPartnerModel(sequelize, Sequelize.DataTypes);
db.Region = initRegionModel(sequelize, Sequelize.DataTypes);
db.Request = initRequestModel(sequelize, Sequelize.DataTypes);
db.Service = initServiceModel(sequelize, Sequelize.DataTypes);
db.User = initUserModel(sequelize, Sequelize.DataTypes);

// Requests table takes 2 foreign keys from the User table
db.User.hasMany(db.Request, {
  as: 'partner_request_referred',
  foreignKey: 'partner_manager_id',
});
db.Request.belongsTo(db.User, {
  as: 'PartnerManagerID',
  foreignKey: 'partner_manager_id',
});

db.User.hasMany(db.Request, {
  as: 'referring_employee_request',
  foreignKey: 'referring_employee_id',
});
db.Request.belongsTo(db.User, {
  as: 'ReferringEmployeeID',
  foreignKey: 'referring_employee_id',
});

// One-to-Many table here.
db.Partner.belongsTo(db.User);
db.User.hasMany(db.Partner);

// in order for the many-to-many to work we must mention the join table here.
db.Request.belongsToMany(db.Partner, { through: 'requests_partners' });
db.Partner.belongsToMany(db.Request, { through: 'requests_partners' });

db.Request.belongsToMany(db.Region, { through: 'requests_regions' });
db.Region.belongsToMany(db.Request, { through: 'requests_regions' });

// we also have the special partners_services_regions.
// this has 3 foreign keys in one table, and nothing else
// stack overflow offers this solution to associate the partners, services and regions tables into one joining table which doesn't require creation of joining table
// https://stackoverflow.com/questions/60552715/sequelize-association-many-to-many-3-foreign-keys
User.hasMany(ThreadFolder, { foreignKey: 'user_id' })
ThreadFolder.belongsTo(User, { foreignKey: 'user_id' })

Folder.hasMany(ThreadFolder, { foreignKey: 'folder_id' })
ThreadFolder.belongsTo(Folder, { foreignKey: 'folder_id' })

Thread.hasMany(ThreadFolder, { foreignKey: 'thread_id' })
ThreadFolder.belongsTo(Thread, { foreignKey: 'thread_id' })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
