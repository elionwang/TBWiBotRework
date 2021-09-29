module.exports = {
name: "unmute", 
description: "Unmute de genoemde persoon.",
usage: "+unmute <user>",
code: `$takeRoles[$mentioned[1];$roleID[Muted]]
$title[**Unmute**]
$color[FFD700]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$footer[Unmuted door $username.]
$description[

Unmuted: <@!$findUser[$message[1]]>
Unmuted door: <@!$authorID>
]
$addTimestamp
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$argsCheck[>1;Mention iemand om hem te unmuten.]
$onlyPerms[manageroles;:x: Je hebt geen rechten om deze command uit te voeren!]
$onlyIf[$hasRole[$findUser[$message[1]];$roleID[Muted]]==true;{title:Error} {description:Deze user is niet gemute!} {color:RED}]
$onlyIf[$roleExists[$roleID[Muted]]==true;{title:Error} {description:Er is geen muted role!} {color:RED}]` 
}