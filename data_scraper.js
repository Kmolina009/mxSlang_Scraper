const rp = require('request-promise');
const $ = require('cheerio');
const slangParse = require('./slangParser');
const url = 'https://www.asihablamos.com/word/pais/mx/';

rp(url)
    .then(function(html){
        //store get the URL to each word
        const slangUrls = [];
        //initial crawl

        // console.log($(".indice_lista > a",html))
        let slangWords = $(".indice_lista > a",html).length;
        console.log(slangWords)
        for(let i = 0; i < slangWords; i++){
            slangUrls.push($(".indice_lista > a",html)[i].attribs.href)
        }
        console.log(slangUrls)
    }).catch(function(err){
        //error
        console.log("404, something went wrong")
        })
    