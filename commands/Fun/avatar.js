module.exports = {
name: "avatar", 
code: `$author[Avatar van $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$image[$userAvatar[$mentioned[1;yes]]]
$title[**Avatar**]
$color[FFD700]
$footer[Command uitgevoerd door $username#$discriminator[$authorID];$authorAvatar]
$addTimestamp` 
}