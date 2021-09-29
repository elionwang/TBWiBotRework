module.exports = {
name: "nickname",
aliases: ["nick"],
description: "Geeft de genoemde persoon een nickname.",
usage: "+nickname <user>",
code: `$changeNickname[$mentioned[1];$noMentionMessage]
$author[Nickname wijziging;https://media.discordapp.net/attachments/773126566414385166/780766670704083024/image0.png]
$description[Nickname van <@!$mentioned[1]> met succes gewijzigd naar $noMentionMessage!]
$color[FFD700]
$addTimestamp
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$onlyPerms[admin;Je hebt geen rechten om deze command uit te voeren!]` 
}