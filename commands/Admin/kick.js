module.exports = {
name: "kick",
description: "Kickt de genoemde persoon.",
usage: "+kick <user> <reden>",
code: `$kick[$mentioned[1];$noMentionMessage]
$title[Kick]
$description[**Gekickt: <@!$mentioned[1;yes]>
Gekickt door: <@!$authorID>
Reden: $noMentionMessage**] 
$argsCheck[<3;**Hey, Je moet de naam neerzetten van degene die je wil kicken en je moet een reden geven!**]
$addTimestamp
$color[FFD700]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$argsCheck[>1;{color:RED} {description:Verkeerd gebruik! Gebruik \`$commandInfo[usage]\`}]
$onlyPerms[ban;kick;manageserver;managemessages;Je hebt geen rechten om deze command uit te voeren!]` 
}