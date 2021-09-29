module.exports = {
name: "joinchannel",
description: "Stelt de join channel in.",
usage: "+joinchannel <channel>",
code: `$setServerVar[joinchannel;$mentionedChannels[1;yes]]
$title[Join Channel Setup]
$description[Ik heb de join channel gezet naar **<#$mentionedChannels[1;yes]>**!]
$color[FFD700]
$addTimestamp
$onlyPerms[admin;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
}