const { Router } = require('express');
const user = require('./users/users');

const route = Router();

route.use('/user', user);


module.exports = route;