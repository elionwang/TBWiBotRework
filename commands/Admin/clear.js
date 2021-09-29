module.exports = {
name: "clear", 
code: `$clear[$message]
$title[Clear]
$thumbnail[https://media.discordapp.net/attachments/756098390424682509/770649579624333332/image0.png]
$description[Ik heb $message message(s) verwijderd!]
$color[FFD700]
$argsCheck[<2;Je moet een specifiek nummer van berichten die je wil verwijderen aangeven!]
$deleteIn[5s]
$deletecommand
$footer[$message berichten verwijderd door $username#$discriminator[$authorID];$authorAvatar]
$addTimestamp
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$onlyIf[$isNumber[$message]==true;Typ een geldig nummer!]
$onlyPerms[admin;❌ Je hebt geen rechten om deze command uit te voeren!]` 
}