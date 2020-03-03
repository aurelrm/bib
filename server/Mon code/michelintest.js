const cheerio = require('cheerio')
const axios = require('axios')
//card_menu.js-match-height.js-map).map((i,element)) = > {
//	const name = $(element).find(h5.card_menu-content--title).text()
//}
var listname = []
var listadress = []

// Cette fonction a pour but de parcourir toute les pages des restaurant possédant le bib gourmand
//Je récupère dans une liste toute les url de chaques restaurants et je retourne ce tableau
async function myURL() {
	var linkResto = []
	for (let i = 1; i < 567 / 20 + 1; i++) {
		const baseURL = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/' + i;
		const reponse = await axios(baseURL)
		const html = reponse.data;
		const $ = cheerio.load(html);
		for (let i = 1; i < 42; i++) {
			try {
				const link = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.row.restaurant__list-row.js-toggle-result.js-geolocation > div:nth-child(' + i + ') > div > div.card__menu-content.js-match-height-content > h5 > a').attr("href");
				//console.log('https://guide.michelin.com/' + link)
				if (link != undefined) {
					linkResto.push('https://guide.michelin.com/' + link)
					//console.log(linkResto[linkResto.length - 1])
				}
			}
			catch (error) {
			}
		}
	}
	return linkResto
}

//Cette fonction récupère la liste d'url. Pour chaque page, cette fonction récupère le nom et l'adresse du restaurant en question
async function getNameAdress() {
	var myURLs = await myURL()
	console.log(myURLs)
	myURLs.forEach(url => {
		axios(url).then((reponse) => {
			const html = reponse.data;
			const $ = cheerio.load(html);
			const name = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > h2').text();
			const adress = $('body > main > div.restaurant-details > div.container > div > div.col-xl-4.order-xl-8.col-lg-5.order-lg-7.restaurant-details__aside > div.restaurant-details__heading.d-lg-none > ul > li:nth-child(1)').text();
			console.log(name + ' ' + adress);
		});

	})
}

getNameAdress()




