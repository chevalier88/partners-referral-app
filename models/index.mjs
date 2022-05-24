import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';
import initRequestModel from './request.mjs';
import initPartnerModel from './partner.mjs';
import initRegionModel from './region.mjs';
import initServiceModel from './service.mjs';
import initCoverageModel from './coverage.mjs';

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
db.Coverage = initCoverageModel(sequelize, Sequelize.DataTypes);

// One-to-Many table here - each Request can only have 1 submitting person, ther referring employee
db.Request.belongsTo(db.User);
db.User.hasMany(db.Request);

// One-to-Many table here - each Partner can only have 1 dedicated Partner Manager assigned
db.Partner.belongsTo(db.User);
db.User.hasMany(db.Partner);

// One-to-Many table here - each Partner can only have 1 dedicated Partner Manager assigned
db.Partner.belongsTo(db.User);
db.User.hasMany(db.Partner);

// 1-M table - each request can only have 1 service
db.Request.belongsTo(db.Service);
db.Service.hasMany(db.Request);

// 1-M table - after the Partner manager checks out the request, they update table and assign to a Partner. Only 1 Partner can ever be assigned.
// this means each Request can only have 1 Partner
db.Request.belongsTo(db.Partner);
db.Partner.hasMany(db.Request);

// in order for the many-to-many to work we must mention the join tables here.
db.Request.belongsToMany(db.Region, { through: 'requests_regions' });
db.Region.belongsToMany(db.Request, { through: 'requests_regions' });

// we also have the special partners_services_regions.
// this has 3 foreign keys in one table, and nothing else
// stack overflow offers this solution to associate the partners, services and regions tables into one joining table which doesn't require creation of joining table
// https://stackoverflow.com/questions/60552715/sequelize-association-many-to-many-3-foreign-keys
db.Partner.hasMany(db.Coverage, { foreignKey: 'partners_id' })
db.Coverage.belongsTo(db.Partner, { foreignKey: 'partners_id' })

db.Service.hasMany(db.Coverage, { foreignKey: 'services_id' })
db.Coverage.belongsTo(db.Service, { foreignKey: 'services_id' })

db.Region.hasMany(db.Coverage, { foreignKey: 'regions_id' })
db.Coverage.belongsTo(db.Region, { foreignKey: 'regions_id' })


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
