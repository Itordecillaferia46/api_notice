const express = require('express');
const router = express.Router();
const Noticia = require('../models/Noticia');

//get all routes
router.get('/', async(req, res) => {
    const noticias = await Noticia.find();

    res.json(noticias);
});

//create new notice
router.post('/new', async(req, res) => {
    const newNoticia = new Noticia(req.body);

    const savedNoticia = await newNoticia.save();

    res.json(savedNoticia);
});

// Get specific notice
router.get('/get/:id', async(req, res) => {
    const n = await Noticia.findById({ _id: req.params.id });

    res.json(n);
});

// Delete a notice
router.delete('/delete/:id', async(req, res) => {
    const result = await Noticia.findByIdAndDelete({ _id: req.params.id });

    res.json(result);
});

// Update a notice
router.patch('/update/:id', async(req, res) => {
    const n = await Noticia.updateOne({ _id: req.params.id }, { $set: req.body });

    res.json(this.notify);
});


module.exports = router;