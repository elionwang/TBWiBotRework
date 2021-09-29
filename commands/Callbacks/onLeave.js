module.exports = {
  channel: "$getServerVar[joinchannel]", 
  type: 'leaveCommand',
  code: `$author[$username#$discriminator[$authorID];$serverIcon]
  $description[👋 | **$username#$discriminator[$authorID]** is *$serverName* geleaved! 😢]
  $thumbnail[$authorAvatar]
  $footer[Er zijn nog $membersCount members over.]
  $color[FFD700]`
}