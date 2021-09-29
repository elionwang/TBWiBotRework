module.exports = {
name: "youtube", 
aliases: ["yt"],
description: "Zoekt iets op youtube voor je.",
usage: "+youtube <zoekopdracht>",
code: `$color[RED]
$author[YouTube Search;https://media.discordapp.net/attachments/773126566414385166/775302336301236224/image0.png]
$description[*Youtube zoekresultaat*
**Je zocht waarschijnlijk naar: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]
Url: [Klik hier]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;])
Wanneer geüpload: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded;];years;jaar];months;maand(en)];days;dagen;];hours;uur];ago;geleden]
Duur: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;]
Views: $jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views;]
Geüpload door: [$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name;]**]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_url;])]
$argsCheck[>2;Hey! Geef een geldige zoekopdracht! Gebruik +youtube <zoekopdracht>.]
$deletecommand
$botTyping` 
}