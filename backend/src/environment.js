const path = require("path");

const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "../.env." + ENV);

require("dotenv").config({ path: PATH });

PGHOST=localhost
PGUSER=labber
PGDATABASE=photolabs_development
PGPASSWORD=labber
PGPORT=5432


module.exports = ENV;
