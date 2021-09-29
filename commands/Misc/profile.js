module.exports = {
name: "profile", 
aliases: ["whois"],
code: `$author[Profile van <@$mentioned[1;yes]>;$userAvatar[$mentioned[1;yes]]]
$title[**Profile**]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$description[
**🏷Tag/Username🏷:**
Nickname: $nickname[$mentioned[1;yes]]
Username: $username[$mentioned[1;yes]]

**🆔User ID🆔:**
$mentioned[1;yes]

**🗓Account Creatie🗓:**
$creationDate[$mentioned[1;yes]]

**👋Member is $serverName gejoind op👋:**
$memberJoinedDate[$mentioned[1;yes]]

**🔝Hoogste Role🔝:**
**<@&$highestRole[$mentioned[1;yes]]>**

**👥Rollen👥:**
$userRoles[$mentioned[1;yes]]]
$footer[Command gebruikt door: $username#$discriminator[$authorID];$authorAvatar]
$color[FFD700]`
}