module.exports = {
name: "ban", 
description: "Bant de genoemde persoon.",
usage: "+ban <user> <reden>",
code: `$ban[$findUser[$message[1]];$noMentionMessage]
$title[Ban]
$color[FFD700]
$thumbnail[$userAvatar[$mentioned[1]]]
$description[**Geband: <@!$findUser[$message[1]]>
Geband door: <@!$authorID>
Reden: $noMentionMessage**] 
$addTimestamp
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$onlyIf[$isBanned[$mentioned[1]]==false;Deze user is al gebanned!]
$onlyIf[$mentioned[1]!=$authorID;{color;RED} {description:Je kan jezelf niet bannen!}]
$onlyIf[$mentioned[1]!=$clientID;{color:RED} {description:Je kan de bot niet bannen!}]
$onlyIf[$findUser[$message[1]]!=;{color:RED} {description:Dat is geen geldige user om te bannen!}]
$onlyPerms[ban;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
}