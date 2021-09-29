module.exports = {
name: "mute", 
aliases: "timpmute",
description: "Mute de genoemde persoon.",
usage: "+mute <user> <reden>",
code: `$giveRoles[$mentioned[1;yes];$roleID[Muted]]
$title[**Mute**]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$description[

Gemute: <@!$mentioned[1;yes]>
Gemute door: <@!$authorID>
Reden: __**$noMentionMessage**__
]
$footer[Gemute door $username.]
$addTimestamp
$color[FFD700]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$argsCheck[>2;{color:RED} {description:Verkeerd gebruik! Gebruik \`$getServerVar[prefix]mute <user> <reden>\`}]
$onlyPerms[manageroles;:x: Je hebt geen rechten om deze command uit te voeren!]
$onlyIf[$hasRole[$mentioned[1;yes];$roleID[Muted]]==false;{title:Error} {description:Deze user is al gemute!} {color:RED}]
$onlyIf[$roleExists[$roleID[Muted]]==true;{title:Error} {description:Er is geen muted role!} {color:RED}]` 
}