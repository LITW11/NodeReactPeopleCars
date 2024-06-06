const router = require('express').Router();
const db = require('../db');

router.post('/add', async (req, res) => {
    await db.addPerson(req.body);
    res.json({status: 'ok'});
});

router.get('/getall', async (req, res) => {
    res.json(await db.getPeople());
})

router.get('/get/:id', async (req, res) => {
    const person = await db.getPerson(req.params.id);
    res.json(person);
})

module.exports = router;