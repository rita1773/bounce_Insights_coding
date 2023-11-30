const express = require('express');
const fetch = (...args) => import('node-fetch')
    .then(({ default: fetch }) => fetch(...args));
const router = express.Router();

const API = 'https://restcountries.com/v3.1/name'

//API route to get the country details
router.get('/countries/:name', async (req, res) => {
    try {
        const countryName = req.params.name;
        //getting specific fields using params
        const apiResponse = await fetch(`${API}/${countryName}?fullText=true&fields=name,capital,region,flag,maps,population,area`)
        const apiResponseJson = await apiResponse.json()
        const countryData = apiResponseJson[0]
        res.send(countryData)

    } catch (err) {
        res.status(500).send('Something went wrong')
    }
});

module.exports = router;
