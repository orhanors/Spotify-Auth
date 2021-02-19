const services = require("express").Router();

const usersRoute = require("./user");
const deezerRoute = require("./deezer");
services.use("/users", usersRoute);
services.use("/deezer", deezerRoute);

module.exports = services;
