module.exports = {
name: "unban", 
description: "Unbant de genoemde persoon.",
usage: "+unban <user> <reden>",
code: `$unban[$findUser[$message[1]];$noMentionMessage]
$title[Unban]
$color[FFD700]
$description[**Geunbanned: <@!$message>
Geunbanned door: <@!$authorID>**]
$argsCheck[<2;**Hey, Je moet de naam neerzetten van degene die je wil unbannen!**]
$addTimestamp
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$onlyIf[$isBanned[$findUser[$message[1]]]==true;Deze user is niet gebanned!]
$onlyIf[$findUser[$message[1]]!=;{color:RED} {description:Dat is geen geldige user om te unbannen!}]
$onlyPerms[ban;Je hebt geen rechten om deze command uit te voeren!]`
}