module.exports = {
name: "distort", 
code: `$argsCheck[<2;Mention iemand om zijn/haar profielfoto beter te maken!]
$thumbnail[https://media.discordapp.net/attachments/756098390424682509/770704939915804733/image0.png]
$title[**Je profielfoto maar beter**]
$image[https://api.alexflipnote.dev/filter/magik?image=$userAvatar[$mentioned[1;yes]]]
$color[RANDOM]
$footer[Beste profielfoto ooit]
$addTimestamp
$onlyIf[$mentioned[1;yes]!=;Mention iemand!]` 
}
