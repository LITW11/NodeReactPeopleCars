const router = require('express').Router();
const db = require('../db');

router.get('/getall', async (req, res) => {
    res.json(await db.getCars(req.query.personId));
});

router.post('/delete', async (req, res) => {
    await db.deleteCars(req.body.personId);
    res.json({});
});

router.post('/add', async (req, res) => {
    await db.addCar(req.body);
    res.json({});
})

module.exports = router;