
const express = require('express');
const cluster = require('cluster');
const os = require('os');
const path = require('path')

const apiV1 = require('../api/v1'); 
const SocketService = require('../services/socket-service');

const cpusLength = os.cpus().length;

const expressLoader = async (app) => {
  const http = require('http').Server(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', apiV1);

  app.set('view engine', 'ejs');

  app.set('views', path.join(__dirname, '../views'))

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.set('socketService', new SocketService(http));

  if (cluster.isMaster) {
    for (let i = 0; i < cpusLength -1; i ++) {
        // and one for master
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      cluster.fork();
    });
  } else {
    http.listen(3000, () => {
        console.log(`PID ${process.pid}; app listen on 3000!`);
    });
  }

  return app;
};

module.exports = expressLoader;

