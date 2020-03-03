const cheerio = require('cheerio')
const axios = require('axios')
//card_menu.js-match-height.js-map).map((i,element)) = > {
//	const name = $(element).find(h5.card_menu-content--title).text()
//}
var listname = []
var listadress = []
var listnumero = []
async function getNameAdressNum() {

    for (let i = 1; i < 3000; i++) {
        const baseURL = 'https://www.maitresrestaurateurs.fr/profil/' + i;
		const reponse = await axios(baseURL)
		const html = reponse.data;
        const $ = cheerio.load(html);
        const num = $('#module_ep > div.ep-container.container > div > div > div.ep-content-left.col-md-8 > div > div.ep-section.ep-section-parcours.row > div > div > div.section-item-right.text.flex-5 > span:nth-child(3)').text()

        console.log(num)
    }
}

getNameAdressNum()