module.exports = {
name: "report",
description: "Report de genoemde persoon.",
usage: "+report <user> <reden>",
code: `$sendMessage[{title:Report} {description:**Je Report is geregistreerd!**
We zullen zo snel mogelijk kijken naar je report. Heb alsjeblieft geduld.} {color:FFD700}]
$useChannel[773126566414385166]
$argsCheck[<3;Verkeerd gebruik! Probeer -report <User> <Reden>]
$title[Nieuwe Report]
$color[FFD700]
$footer[Report gestuurd door $username[$authorID]#$discriminator[$authorID] ($authorID)]
$description[**Beschuldigd:** <@!$mentioned[1;yes]>
**Reporter:** <@!$authorID>
**Channel:** <#$channelID>
**Reden:** $noMentionMessage]
$footer[Report van $username#$discriminator[$authorID]]
$addTimestamp` 
}