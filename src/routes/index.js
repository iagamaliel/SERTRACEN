const express = require('express');
const router = express.Router();
const Person = require('../model/person');

router.get('/', async (req, res) => {
  const persons = await Person.find();
  res.render('index', {
    persons
  });
});

router.post('/add', async (req, res, next) => {
  const person = new Person(req.body);
  await person.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const person = await Person.findById(id);
  person.status = !person.status;
  await person.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const person = await Person.findById(req.params.id);
  console.log(person)
  res.render('edit', { person });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Person.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Person.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
