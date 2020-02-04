const rp = require('request-promise');
const $ = require('cheerio');
const slangParse = require('./slangParser');
const url = 'https://www.asihablamos.com/word/pais/mx/';

rp(url)
    .then(function(html){
        //store get the URL to each word
        // const slangUrls = [];
        //initial crawl

        console.log($(".indice_lista > a",html).length)
        // for(let i = 0; i < )
    }).catch(function(err){
        //error
        console.log("404, something went wrong")
        })
    