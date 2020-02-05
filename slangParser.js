const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.asihablamos.com/word/palabra/A+huevo.php?pais=MX';
// const slangParse = function(url){

// }

rp(url)
    .then(function(html){
        // console.log($(".palabra",html).text());
        //after the first ".pais" tag, scrap ".definicion" until ".pais" is reached again
        console.log($(".definicion",html).text());
    })