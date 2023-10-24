const express = require('express')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')
const statisticsRouter = require('./routes/statistics')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/api/', indexRouter)
app.use('/api/todos', todosRouter)
app.use('/api/statistics', statisticsRouter)

module.exports = app
