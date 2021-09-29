module.exports = {
name: "suggest",
description: "Stuurt een suggestie.",
usage: "+suggest <suggestie>",
code: `$deletecommand
$thumbnail[https://media.discordapp.net/attachments/756098390424682509/770306265900384366/image0.jpg]
$useChannel[773126566414385166]
$description[$message]
$title[Nieuwe Suggestie!]
$footer[Suggestie van $username#$discriminator[$authorID];$authorAvatar]
$addReactions[✅;❌]
$color[FFD700]
$addTimestamp` 
}