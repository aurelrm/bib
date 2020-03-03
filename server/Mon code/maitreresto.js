const cheerio = require('cheerio')
const axios = require('axios')

module.exports.scrapePage = async page =>{ 
	const payload = {
		'page' : page,
		'request_id' : ""
	};
	const options = {
		'url' : 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult',
		'method' : 'POST',
		'headers0' : {'content-type'  : 'application/x-www-form-urlencoded'},
	};
	const response = await axios(options);
	const {data,status} = response;

	if(status >= 200 && status < 300)
	{
		return parsePage(data)

	}
	console.error(status);
	return null;
}