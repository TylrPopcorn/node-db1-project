const router = require('express').Router()
const middleware = require("./accounts-middleware")
const account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', middleware.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account)
})

router.post('/', middleware.checkAccountPayload, middleware.checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newacc = await account.create({
      name: req.body.name.trim(),
      budget: requestAnimationFrame.bdy.budget,
    })

    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', middleware.checkAccountId, middleware.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  const updated = await account.updateById(req.params.id, req.body)
  try {
    res.json(updated)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', middleware.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await account.deleteById(req.params.id)
    res.json(req.account)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
