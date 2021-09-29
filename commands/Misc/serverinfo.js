module.exports = {
name: "serverinfo", 
description: "Geeft info van deze server.",
usage: "+serverinfo",
code: `$title[Server Info]
$author[$serverName;$serverIcon]
$thumbnail[$serverIcon]
$description[**Info:**
**Owner: <@!$ownerID>**
**Boosts: $serverBoostCount (Level $serverBoostLevel)
**Regio:** $serverRegion
**Aantal kanalen:** $channelCount
**Aantal Emojis:** $emojiCount ($emojiCount[normal] normal, $emojiCount[animated] animated)
**Members:** $membersCount ($botCount bots)
**Aantal roles:** $roleCount
**Verificatie:** $serverVerificationLevel]
$color[FFD700]` 
}