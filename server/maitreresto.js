const cheerio = require('cheerio')
const axios = require('axios')
//let data = new FormData();
const baseURL = 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult';
async function maitreresto() {

    let res = await axios.get(baseURL)
    console.log(res.data)
    
}
maitreresto()
