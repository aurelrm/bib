const axios = require('axios')
const r = axios({
    url : 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult',
    data : {
        page : 2
    }  
})
console.log(r.data);
