require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const srv = express();
const init = require('./init');

//================|Configuring Express|================
srv.set('trust proxy', 1) // Trust first proxy (for NGINX in prod)
srv.use(bodyParser.json());
//=====================================================

//==================|Mounting Routes|==================
const ApiRoutes = require(`${__dirname}/routes/api`);
const SecuredRoutes = require(`${__dirname}/routes/securedApi`);
srv.use('/api', ApiRoutes); //Mount
srv.use('/secured', SecuredRoutes);
//=====================================================

const SRV_PORT = process.env.SRV_PORT || 3030;

init.createViews();

srv.listen(SRV_PORT, () => {
  console.warn(`Server is working on ${SRV_PORT} port...`);
});

