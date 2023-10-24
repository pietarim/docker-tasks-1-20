const express = require('express')
const { Todo } = require('../mongo')
const router = express.Router()
const { setAsync, getAsync } = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos)
})

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  })
  let count = await getAsync('added_todos')
  if (!count) {
    count = 1
  } else {
    count++
  }
  await setAsync('added_todos', count)
  res.send(todo)
})

const singleRouter = express.Router()

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200)
})

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  const todo = req.todo
  if (!todo) {
    res.sendStatus(405)
  }
  res.status(200).send(todo)
})

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { _id } = req.todo
  const newTodo = req.body
  try {
    const result = await Todo.findByIdAndUpdate(
      _id,
      { ...newTodo },
      { new: true }
    )
    res.sendStatus(201)
  } catch {
    res.sendStatus(405) /* Implement this */
  }
})

router.use('/:id', findByIdMiddleware, singleRouter)

module.exports = router
