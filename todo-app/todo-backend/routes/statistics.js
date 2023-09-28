const express = require('express')
const router = express.Router()
const { setAsync, getAsync } = require('../redis')

router.get('/', async (_, res) => {
  let added_todos = await getAsync('added_todos')
  if (!added_todos) {
    added_todos = 0
  }
  res.send({ added_todos: parseInt(added_todos) })
})

module.exports = router
