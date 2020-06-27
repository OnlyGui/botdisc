const express = require('express');
const Category = require('../models/categoryPics')
const router = express.Router();
const { default: Axios } = require('axios');
const logger = require('../config/logger');

router.get('/hat', async (req, res, next) => {

    const glassCatPicutures = await Axios.get("https://api.thecatapi.com/v1/images/search", {
        headers: {
            'x-api-key': '8676dee6-65f2-4574-afd5-58d94c7c01ce'
        },
        params: {
            category_ids: 1,
            limit: 3
        }
    });

    try {
        await Category.create({
            Category: 'Hat',
            Url1: glassCatPicutures.data[0].url,
            Url2: glassCatPicutures.data[1].url,
            Url3: glassCatPicutures.data[2].url
        });
    } catch (e) {
        logger.log(e);
    }
    res.status(200).send({
        mensagem: 'Adicionado 3 fotos de gato com chapéu a base!!'
      });
});

router.get('/sunglasses', async (req, res, next) => {

    const glassCatPicutures = await Axios.get("https://api.thecatapi.com/v1/images/search", {
        headers: {
            'x-api-key': '8676dee6-65f2-4574-afd5-58d94c7c01ce'
        },
        params: {
            category_ids: 4,
            limit: 3
        }
    });

    try {
        await Category.create({
            Category: 'Sunglasses',
            Url1: glassCatPicutures.data[0].url,
            Url2: glassCatPicutures.data[1].url,
            Url3: glassCatPicutures.data[2].url
        });
    } catch (e) {
        console.log(e);
    }
    res.status(200).send({
        mensagem: 'Adicionado 3 fotos de gato com oculos a base!'
      });
});

module.exports = app => app.use('/save-categories-picture', router);