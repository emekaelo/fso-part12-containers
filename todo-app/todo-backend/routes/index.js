require('dotenv').config()
const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const {getAsync} = require("../redis");

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const addedTodoCount = {
    "added_todos": await getAsync('todoCount') ?? 0
  }
  res.send(addedTodoCount)
})

module.exports = router;
