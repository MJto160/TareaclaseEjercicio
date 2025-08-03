module.exports = {
  HOST: "ep-shy-meadow-afdu1acc-pooler.c-2.us-west-2.aws.neon.tech",
  USER: "neondb_owner",
  PASSWORD: "npg_R2YV3ONQnWlH",
  DB: "neondb",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};