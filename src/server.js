const express = require('express');

const loaders = require('./loaders');

const app = (async () => {
  return await loaders(express());
})();



