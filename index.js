           const keepAlive = require('./server.js')
 
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
  token: process.env.TOKEN,
  prefix: ["$getServerVar[prefix]", "<@!775687174980370434>"],
  revertReading: true
})

bot.botJoinCommand({
channel: "$systemChannelID",
code: `$title[Bot toegevoegd aan $serverName!]
$description[Dank je wel voor het toevoegen van mij in **$serverName!**]
$thumbnail[$userAvatar[$clientID]]
$footer[Voor een lijst van commands, gebruik \`+help\`.]
$color[FFD700]`
})

bot.onGuildJoin()

bot.variables({
    Check: "on",
    joinchannel: "",
    Report: "on",
    xp: "0",
    money: "0",
    bank: "0",
    level: "1",
    req: "300",
    mutes: "0",
    warns: "0",
    totalxp: "0",
    user_ID: "undefinied",
    user_message: "undefinied",
    afk: "undefined",
    afkwhy: "undefinied",
    prefix: "-",
    levels_channel: "undefined",
    starboard: "undefined",
    star_message: "undefined",
    star_user: "undefined",
    stars: "0",
    logchannel: "undefined",
    prefix: "+",
    shelly: "0",
    shellyuser: "Niet geclaimd",
    nita: "0",
    nitauser: "Niet geclaimd",
    colt: "0",
    coltuser: "Niet geclaimd",
    bull: "0",
    bulluser: "Niet geclaimd",
    jessie: "0",
    jessieuser: "Niet geclaimd",
    brock: "0",
    brockuser: "Niet geclaimd",
    dynamike: "0",
    dynamikeuser: "Niet geclaimd",
    bo: "0",
    bouser: "Niet geclaimd",
    tick: "0",
    tickuser: "Niet geclaimd",
    bit: "0",
    bituser: "Niet geclaimd",
    emz: "0",
    emzuser: "Niet geclaimd",
    elprimo: "0",
    elprimouser: "Niet geclaimd",
    barley: "0",
    barleyuser: "Niet geclaimd",
    poco: "0",
    pocouser: "Niet geclaimd",
    rosa: "0",
    rosauser: "Niet geclaimd",
    rico: "0",
    ricouser: "Niet geclaimd",
    darryl: "0",
    darryluser: "Niet geclaimd",
    penny: "0",
    pennyuser: "Niet geclaimd",
    carl: "0",
    carluser: "Niet geclaimd",
    jacky: "0",
    jackyuser: "Niet geclaimd",
    piper: "0",
    piperuser: "Niet geclaimd",
    pam: "0",
    pamuser: "Niet geclaimd",
    frank: "0",
    frankuser: "Niet geclaimd",
    bibi: "0",
    bibiuser: "Niet geclaimd",
    bea: "0",
    beauser: "Niet geclaimd",
    nani: "0",
    naniuser: "Niet geclaimd",
    edgar: "0",
    edgaruser: "Niet geclaimd",
    mortis: "0",
    mortisuser: "Niet geclaimd",
    tara: "0",
    tarauser: "Niet geclaimd",
    gene: "0",
    geneuser: "Niet geclaimd",
    max: "0",
    maxuser: "Niet geclaimd",
    mrp: "0",
    mrpuser: "Niet geclaimd",
    sprout: "0",
    sproutuser: "Niet geclaimd",
    byron: "0",
    byronuser: "Niet geclaimd",
    spike: "0",
    spikeuser: "Niet geclaimd",
    crow: "0",
    crowuser: "Niet geclaimd",
    leon: "0",
    leonuser: "Niet geclaimd",
    sandy: "0",
    sandyuser: "Niet geclaimd",
    amber: "0",
    amberuser: "Niet geclaimd",
    gale: "0",
    galeuser: "Niet geclaimd",
    surge: "0",
    surgeuser: "Niet geclaimd",
    colette: "0",
    coletteuser: "Niet geclaimd",
    lou: "0",
    louuser: "Niet geclaimd",
    snelste_brawlball_win: "",
    snelste_brawlball_winuser: "",
    snelste_heist_win: "",
    snelste_heist_winuser: "",
    snelste_siege_win: "",
    snelste_siege_winuser: "",
    meeste_sterren: "",
    meeste_sterrenuser: "",
    hoogste_siege_bot: "",
    hoogste_siege_botuser: "",
    meeste_powercubes_solo: "",
    meeste_powercubes_solouser: "",
    meeste_powercubes_duo: "",
    meeste_powercubes_duouser: "",
    city_rampage: "",
    city_rampageuser: "",
    boss_fight: "",
    boss_fightuser: "",
    robo_rumble: "",
    robo_rumbleuser: "",
    snelste_brawlball_win_community: "",
    snelste_brawlball_win_communityuser: "",
    snelste_heist_win_community: "",
    snelste_heist_win_communityuser: "",
    snelste_siege_win_community: "",
    snelste_siege_win_communityuser: "",
    meeste_sterren_community: "",
    meeste_sterren_communityuser: "",
    hoogste_siege_bot_community: "",
    hoogste_siege_bot_communityuser: "",
    meeste_powercubes_solo_community: "",
    meeste_powercubes_solo_communityuser: "",
    meeste_powercubes_duo_community: "",
    meeste_powercubes_duo_communityuser: "",
    gems: "0"
    })

bot.status({
      text: "+help | bit.ly/tbwibot",
      type: "PLAYING",
      time: 30
})

const username = "$username"
const discrim = "$discriminator"
const members = "$membersCount"
const guild = "$serverName"
const avatar = "$replaceText[$userAvatar[$authorID];webp;png]"
const background = "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q="

bot.joinCommand({
  channel: "$getServerVar[joinchannel]",
  code:  `$djseval[(async() =>{const Discord = require('discord.js')
const canvas = require('discord-canvas'),
  welcomeCanvas = new canvas.Welcome();
let image = await welcomeCanvas
  .setUsername("${username}")
  .setDiscriminator("${discrim}")
  .setMemberCount("${members}")
  .setGuildName("${guild}")
  .setAvatar("${avatar}")
  .setColor("border", "#FFD700")
  .setColor("username-box", "#FFD700")
  .setColor("discriminator-box", "#FFD700")
  .setColor("message-box", "#8015EA")
  .setColor("title", "#FDFEFE")
  .setColor("avatar", "#8015EA")
  .setBackground("${background}")
  .setText("message", "Welcome to {server}")
  .toAttachment();
const attachment = new Discord.MessageAttachment(image.toBuffer(), 'welcome.png'); 

const embed = new Discord.MessageEmbed()
.attachFiles(attachment)
.setImage('attachment://welcome.png');
message.channel.send(embed);
})()]`
})
 
bot.onJoined()

bot.onLeave()

bot.onMessage()

bot.command({
name: "iq", 
code: `$thumbnail[https://cdn.discordapp.com/attachments/738099300478746733/739505493734588456/image0.png]
$title[Jouw IQ]
$description[$username[$mentioned[1;yes]] heeft een IQ van $random[0;250]]
$color[RANDOM]
$onlyIf[$mentioned[1;yes]!=236588847176220672]
$onlyIf[$mentioned[1;yes]!=428272829553967106]
$onlyIf[$mentioned[1;yes]!=354312844851937282]` 
})

bot.command({
name: "iq", 
code: `$thumbnail[https://cdn.discordapp.com/attachments/738099300478746733/739505493734588456/image0.png]
$title[Jouw IQ]
$description[$username[$mentioned[1;yes]] heeft een IQ van ∞]
$color[RANDOM]
$onlyIf[$mentioned[1;yes]==428272829553967106]` 
})

bot.command({
name: "iq",
code: `$thumbnail[https://cdn.discordapp.com/attachments/738099300478746733/739505493734588456/image0.png]
$title[Jouw IQ]
$description[$username[$mentioned[1;yes]] heeft een IQ van ∞]
$color[RANDOM]
$onlyIf[$mentioned[1;yes]==236588847176220672]`
})

bot.command({
name: "iq",
code: `$thumbnail[https://cdn.discordapp.com/attachments/738099300478746733/739505493734588456/image0.png]
$title[Jouw IQ]
$description[$username[$mentioned[1;yes]] heeft een IQ van 69420]
$color[RANDOM]
$onlyIf[$mentioned[1;yes]==354312844851937282]`
})


bot.command({
name: "poll", 
code: `$title[Poll]
$description[Je poll is met succes gestuurd naar <#731139570514526313>!]
$footer[Poll met succes gecreëerd!;$authorAvatar]
$color[FFD700]
$addTimestamp` 
})

bot.command({
name: "8ball", 
code: `$title[**🎱8-ball, Wat is je antwoord op:🎱** *$message*]
$thumbnail[https://media.discordapp.net/attachments/773126566414385166/773187263768428605/image0.jpg]
$argsCheck[>2;Stel een vraag! Gebruik -8ball <vraag>.]
$description[🎱_*$randomText[Ja, sws.;Ja, denk het?;Nee, gwn niet.;Misschien?;Mijn bronnen zeggen van wel.;Waarschijnlijk wel.;Bijna zeker van wel.;Daar kan je op vertrouwen.;Tuurlijk niet!;Het antwoord lijkt op een nee.;Hoogstwaarschijnlijk niet.;Kan zo zijn?;Ik twijfel eraan.;Ik zou uitgaan van niet.;Nee, idioot.;Ja, ik heb het nagevraagd en weet zeker dat het zo is.;Ga toch weg.;Je weet zelf ook dat dat niet waar is.;Nee, natuurlijk niet hahahhaha;Ja, je bent echt een genie!]*_🎱]
$footer[Mijn antwoorden zijn altijd correct.]
$color[RANDOM]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]` 
})

bot.command({
name: "play",
aliases: ["p"],
code: `$color[FFD700]
$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
$author[Nummer aan het afspelen;https://images.squarespace-cdn.com/content/v1/58eac4d88419c2d993e74f57/1491954929572-MII6RYJO4QRPZHRFNYAM/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyD4IQ_uEhoqbBUjTJFcqKvko9JlUzuVmtjr1UPhOA5qkTLSJODyitRxw8OQt1oetw/ITunes_12_logo.png]
$description[Ik heb [**$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title;]**]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url;]) toegevoegd aan de wachtrij!
Huidig Nummer: [**$songInfo[title]**]($songInfo[url]) 
Duur: **$replaceText[$replaceText[$parseDate[$multi[$songInfo[duration];1000];time];minutes;minuten];seconds;seconden]**]
$footer[Wachtrij: $queueLength]
$addCmdReactions[▶️]
$playSong[$message;{color:RED} {description:Er ging iets fout, probeer het later opnieuw.}]
$onlyIf[$message!=;{color:RED} {description:Typ een geldig nummer!}]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]`
})

bot.command({
name: "volume",
aliases: ["vol", "v"],
code: `$reactionCollector[$splitText[1];everyone;1m;🔈,🔉,🔊;awaitReaction5,awaitReaction6,awaitReaction7;yes]
$textSplit[$sendMessage[{title:Volume 🔊} {description:Volume instellen 📻:
1 - 🔈 50%
2 - 🔉 100%
3 - 🔊 150%}{color:FFD700}{footer:Volume instelligen opgevraagd door $username[$authorID].};yes]; ]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]`
}) 


bot.awaitedCommand({
    name: "awaitReaction5",
 code: `$volume[50]`
})

bot.awaitedCommand({
    name: "awaitReaction6",
    code: `$volume[100]`
})
    
bot.awaitedCommand({
    name: "awaitReaction7",
    code: `$volume[150]`
})

bot.command({
name: "lyrics",
aliases: ["l"],
code: `$title[Lyrics] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;Geen lyrics gevonden.]]
$footer[Opgevraagd door: $username;$authorAvatar]
$color[RANDOM]`
})

bot.command({
name: "skip",
aliases: ["s"],
code: `$skipSong
$title[Skip]
$description[⏭ [**$songInfo[title]**\\]($songInfo[url]) geskipt.]
$addCmdReactions[⏭]
$footer[Wachtrij: $queueLength | Geskipt door $username.;$authorAvatar]
$color[RANDOM]
$onlyIf[$queueLength>=0;Er staat geen nummer in de wachtrij!]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]`
})

bot.command({
name: "pause",
code: `
$pauseSong
$title[Pause]
$description[⏸ [**$songInfo[title]**\\]($songInfo[url]) gepauzeerd.]
$addCmdReactions[⏸]
$footer[Wachtrij: $queueLength]
$color[RANDOM]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]
$onlyIf[$queueLength>=0;{color:RED} {description:Er staat geen nummer in de wachtrij!}]`
})

bot.command({
name: "resume",
code: `$resumeSong
$addCmdReactions[▶️]
$onlyIf[$voiceID!=;{color:RED} {description:Join eerst een VC!}]
$onlyIf[$queueLength>0;{color:RED} {description:De wachtrij is leeg!}]
$title[Resume]
$description[▶️ Nummer word weer afgespeeld. Huidig nummer: [**$songInfo[title]**\\]($songInfo[url])]
$footer[Wachtrij: $queueLength]
$color[FFD700]`
})

bot.command({
name: "leave", 
aliases: ["disconnect", "stop"],
code: `$stopSong
$addCmdReactions[👋]
$onlyIf[$voiceID!=;{color:RED}{description: Join eerst een VC!}]
$onlyIf[$queueLength>0;{color:RED}{description: De wachtrij is leeg!}]`
})

bot.command({
name: "lb-levels",    
code:`$title[**XP Leaderboard**]
$thumbnail[https://media.discordapp.net/attachments/773126566414385166/774262632835317780/image0.jpg]
$description[$userLeaderboard[level;asc;{top}. {username} - level {value}]]
$color[FFD700]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$addTimestamp`    
})

bot.command({
name: "resetxp", 
code: `$setUserVar[xp;0;$mentioned[1;yes]]
$setUserVar[level;0;$mentioned[1;yes]]
$setUserVar[req;300;$mentioned[1;yes]]
$title[**Reset XP**]
$description[Ik heb de xp van <@!$mentioned[1;yes]> gereset!]
$footer[XP gereset door $username.;$authorAvatar]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$color[FFD700]
$onlyPerms[` 
})

bot.command({
name: "ban", 
code: `$dm[$mentioned[1;yes]]
$title[Ban]
$description[
**Je bent geband van $serverName[$guildID] door $username[$authorID]!
Reden: $noMentionMessage**]
$color[FFD700]
$onlyPerms[admin;]` 
})

bot.command({
name: "eject", 
code: `$color[RANDOM]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&impostor=$randomText[true;false]&crewmate=$randomText[black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;red;white;yellow]]` 
})

bot.command({
name: "stonks", 
code: `$color[RANDOM]
$image[https://vacefron.nl/api/stonks?user=$userAvatar[$mentioned[1;yes]]?size=4096]` 
})

bot.command({
name: "gay", 
code: `$color[RANDOM]
$image[https://api.alexflipnote.dev/filter/gay?image=$userAvatar[$mentioned[1;yes]]?size=2048]` 
})

bot.command({
name: "truth",
code: `$color[RANDOM]
$image[https://api.alexflipnote.dev/scroll?text=$replaceText[$message; ;+;-1]]
$onlyIf[$message!=;Please type something!]`  
})

bot.command({
name: "drake", 
code: `$argsCheck
$color[RANDOM]
$textSplit[$message;/]
$image[https://api.cool-img-api.ml/drake?top=$splitText[1]&bottom=$splitText[2]]` 
})

bot.command({
name: "water", 
code: `$color[RANDOM]
$image[https://vacefron.nl/api/water?text=$replaceText[$message; ;+;-1]]` 
})

bot.command({
name: "eval",
code: `$eval[$message]
$onlyForIDs[428272829553967106;236588847176220672;672463816453390357;Je hebt geen rechten om deze command uit te voeren!]` 
})    

bot.command({
name: "help",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,🔨,😂,🎵;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4;yes]
$textSplit[$sendMessage[{title: Help Command} {description:Help Command Pages:
🔨 - Moderation
😂 - Fun
🎵 - Music} {color:RANDOM};yes]; ]`
})

bot.awaitedCommand({
 name: "awaitReaction1",
 code: `$editMessage[$message[1];{title:Help Command} {description:Help Command Pages:
🔨 - Moderation
😂 - Fun
🎵 - Music} {color:RANDOM}
]
`})

bot.awaitedCommand({
 name: "awaitReaction2",
 code: `$editMessage[$message[1];{title:🔨 - Moderation} {description:
$getServerVar[prefix]ban: bant een user (kan niet terug joinen)

$getServerVar[prefix]kick: kickt een user (kan terug joinen)

$getServerVar[prefix]mute: mute een user (kan niet chatten)

$getServerVar[prefix]unban: haalt een ban weg (kan weer terugjoinen.)

$getServerVar[prefix]unmute: haalt een mute weg (kan weer chatten.)

$getServerVar[prefix]nickname: wijzigt de nickname van een user.

$getServerVar[prefix]report: report een user. gebruik +report user reden.

$getServerVar[prefix]rank: Laat zien welk level je bent.

$getServerVar[prefix]lb-levels: Laat de Leaderboard zien van levels.

$getServerVar[prefix]tempmute: Mute iemand voor een bepaalde tijd. Gebruik hiervoor +tempmute user tijd.

$getServerVar[prefix]slowmode: Zet een slowmode voor een channel.

$getServerVar[prefix]nuke: Delete een channel en clone hem tegelijk om alle berichten te verwijderen.

$getServerVar[prefix]massrole: Geef een role aan meerdere members tegelijk. +massrole *role member1 member2*

$getServerVar[prefix]levels-channel: Stel de channel in voor level-up messages.} {color:RANDOM} {footer:🔄 - Ga terug naar de home page | 😂 - Fun | 🎵 - Music}
]`
})

bot.awaitedCommand({
 name: "awaitReaction3",
 code: `$editMessage[$message[1];{footer:🔄 - Ga terug naar de home page | 🔨 - Moderation | 🎵 - Music}
{title:😂 - Fun} {description:+help: Geeft je een lijst van alle commands. 

$getServerVar[prefix]server-info: Geeft info over de server.

$getServerVar[prefix]uptime: Laat zien wat de uptime van de bot is.

$getServerVar[prefix]addemoji: Zet een emoji uit een andere server in je eigen server. Zet de emoji achter de command.

$getServerVar[prefix]bsprorate: Geeft een random getal tussen 1-100% die zegt hoe pro je bent in brawl stars.

$getServerVar[prefix]ping: Geeft aan hoelang het duurt voordat de bot reageert op jouw command.

$getServerVar[prefix]rps: Speel Rock, Paper, Scissors tegen de bot. Je speelt door te typen: +rps-rock of +rps-scissors natuurlijk.

$getServerVar[prefix]randompick: De bot kiest een random brawler en gamemode voor je.

$getServerVar[prefix]iq: De bot kiest een random getal tussen 0-250 die zegt wat je iq is.

$getServerVar[prefix]youtube: Zoek iets op youtube. Je gebruikt het door te typen: +youtube zoekopdracht.

$getServerVar[prefix]profile: Vind info over een bepaalde user. Je gebruikt het door te typen: +profile user.

$getServerVar[prefix]hack: Hack iemands account en bankgegevens. Gebruik hiervoor +hack @user.

$getServerVar[prefix]distort: Krijg een distorted versie van iemands profielfoto. Gebruik hiervoor +distort user. Dit werkt niet op mensen met een geanimeerde profielfoto.

$getServerVar[prefix]avatar: Krijg de profielfoto van een bepaalde user. Gebruik hiervoor +avatar user. Dit werkt ook voor mensen met een geanimeerde avatar.

$getServerVar[prefix]add-money: Voeg geld toe aan een bepaalde user. Gebruik hiervoor +add-money @user aantal.

$getServerVar[prefix]bal: Zie je geldbalans. 

$getServerVar[prefix]dep: Deposit geld nar de bank. Gebruik hiervoor +dep aantal.

$getServerVar[prefix]with: Withdraw geld van de bank naar cash. Gebruik hiervoor +with aantal.

$getServerVar[prefix]8ball: Vraag iets aan 8ball. Gebruik hiervoor +8ball vraag.

$getServerVar[prefix]snipe: Vind het laatst verwijderde bericht in het huidige kanaal.

$getServerVar[prefix]afk: Laat mensen weten dat je even weg bent.

$getServerVar[prefix]removeafk: Laat mensen weten dat je terug bent.

$getServerVar[prefix]emojis: Laat de emojis zien van de server.

$getServerVar[prefix]weather: Laat het weer zien van een bepaalde plaats.} {color:RANDOM} 
]`
})

bot.awaitedCommand({
 name: "awaitReaction4",
 code: `$editMessage[$message[1];{footer:🔄 - Ga terug naar de home page | 🔨 - Moderation | 😂 - Fun}
{title:🎵 - Music} {description:+play: Speel een nummer in VC via de bot.

$getServerVar[prefix]skip: Skip naar het volgende nummer.

$getServerVar[prefix]loop: Loop de queue om elke keer opnieuw te spelen.

$getServerVar[prefix]leave: Stopt de hele queue en laat de bot leaven.

$getServerVar[prefix]queue: Laat de wachtrij zien.

$getServerVar[prefix]lyrics: Zoek de lyrics van het huidige nummer.

$getServerVar[prefix]lyrics-search: Zoek de lyrics van een specifiek nummer.

$getServerVar[prefix]pause: Pauzeer het huidige nummer.

$getServerVar[prefix]resume: Speel het huidige nummer verder.} {color:RANDOM}
]`
})

bot.onMessageDelete()

bot.deletedCommand({
 channel: "$channelID",
 code: `
$setChannelVar[user_message;$message]
$setChannelVar[user_ID;$authorID]
`
});
bot.command({
 name: "snipe",
 code: `
$author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
$addTimestamp
$description[
$getChannelVar[user_message]
]
$color[RANDOM]
$onlyIf[$getChannelVar[user_message]!=undefinied;{description: I was not able to find any deleted message on this channel.}{color: ff0000}{author: :x: Message not found on this channel}]`
})

bot.command({
name: "loop",
code: `$description[Loop Queue staat nu $replaceText[$replaceText[$loopQueue;true;**aan**];false;**uit**]]
$color[FFD700]
$addCmdReactions[🔁]
$footer[Wachtrij: $queueLength]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]
$onlyIf[$queueLength>0;{color:RED} {description:Er staat geen nummer in de wachtrij!}]`
})

bot.command({
name: "slowmode",
aliases: ["cooldown", "sm"],
code: `$slowmode[$mentionedChannels[1;yes];$message[2]]
$title[Slowmode]
$description[Ik heb de slowmode voor <#$mentionedChannels[1;yes]> op $noMentionMessage gezet!]
$color[RANDOM]
$addCmdReactions[🕐]
$argsCheck[>1;{color:RED} {description:Verkeerd gebruik! Gebruik +slowmode <channel> <tijd>}]
$onlyPerms[managechannels;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
})

bot.command({
name: "spotify",
aliases: ["sp"],
code: `$addReactions[▶️]
$author[Playlist toegevoegd aan de wachtrij;https://media.discordapp.net/attachments/785506848638763039/796380262233145354/image0.png]
$description[**Ik heb $playSpotify[$message;number;{color:RED} {description:Er ging iets fout. Probeer het later opnieuw.} toegevoegd aan de wachtrij!]]
$footer[Wachtrij: $queueLength]
$color[FFD700]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!}]`
})

bot.command({
name: "queue",
aliases: ["q"],
code: `$title[Queue]
$description[$queue[1;10;{number} - {title} | <@{userID}>]]
$color[FFD700]
$onlyIf[$voiceID!=;{color:RED} {description:Je zit niet in een VC!!}]
$onlyIf[$queueLength>0;{color:RED} {description:Er staan geen nummers in de wachtrij!}]`
})
 
bot.command({
 name: "nuke",
 aliases: ["destroy", "delete"],
 code: `$djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' heeft de channel genuked! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('I dont have enough perms'))
]
$onlyPerms[managechannels;{title:Missing permissions!} {description:You are missing the \`MANAGE_CHANNELS\` permission which is needed to run this command} {color:RANDOM}]`
});

bot.command({
name: "massrole",
code: `$djsEval[const Role = d.message.mentions.roles.first();
 d.message.mentions.members.forEach(member => {
 member.roles.add(Role).catch(e => console.error(e));
 });
 d.message.channel.send(\`Role *\${Role.name}* is gegeven aan \${d.message.mentions.members.map(member => member.user.tag).join(", ")}\`);]
$onlyIf[$mentionedRoles[1]!=;Mention een role...]`
})

bot.command({
name: "lyrics-search",
code: `$title[Lyrics]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;Geen lyrics gevonden voor dit nummer.]]
$footer[Lyrics opgevraagd door $username#$discriminator[$authorID]]
$color[RANDOM]`
})

bot.command({
name: "emojis",
aliases: ["emotes"],
code: `$title[Emojis/Emotes]
$author[Aantal Emotes op deze server: $emojiCount;https://cdn.discordapp.com/attachments/773126566414385166/783699563881431100/PogChampFixed.png]
$description[$serverEmojis]
$color[RANDOM]`
})

bot.command({
name: "channel-info",
code: `$title[Channel Info]
$description[**Naam: <#$mentionedChannels[1;yes]>**
**Datum van creatie:** $creationDate[$mentionedChannels[1;yes]]
**Channel Onderwerp (als die er is):** $replaceText[$channelTopic[$mentionedChannels[1;yes]];none;Geen onderwerp]
**Channel ID:** $mentionedChannels[1;yes]]
$color[RANDOM]
$footer[Channel Info van $channelName[$mentionedChannels[1;yes]]]`
})

let img = `$replaceText[$userAvatar[$findMember[$message]];webp;png]`;
let userData = {
 xp: `$getUserVar[xp;$mentioned[1;yes]]`,
 requiredXP: `$getUserVar[req;$mentioned[1;yes]]`,
 level: `$getUserVar[level;$mentioned[1;yes]]`,
 status: `$status[$mentioned[1;yes]]`,
 name: `$username[$mentioned[1;yes]]`,
 discriminator: `$discriminator[$mentioned[1;yes]]`
};

bot.command({
 name: "rank",
 aliases: ['level', 'r'],
 code: `
$djsEval[const Discord = require('discord.js');
const canvacord = require("canvacord");
 
const rank = new canvacord.Rank().setAvatar("${img}").setLevel(${userData.level}, "Level", true).setCurrentXP(${userData.xp}).setRequiredXP(${userData.requiredXP}).setStatus(\`${userData.status}\`).setProgressBar("#FFFFFF", "COLOR").setUsername(\`${userData.name}\`).setDiscriminator(\`${userData.discriminator}\`).setRank(1, "Rank", false).renderEmojis(true);

rank.build()
 .then(data => {
 const attachment = new Discord.MessageAttachment(data, "RankCard.png");
 d.channel.send(attachment);
 });
]
$onlyIf[$isBot[$mentioned[1;yes]]==false;{description: Bots don't have rank on the server!}{color: ff0000}{author: :x: Invalid user.}]
$botTyping
`
});

bot.command({
name: "$alwaysExecute",
nonPrefixed: true,
code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[15;25]]]$cooldown[30s]`
})

bot.command({
name: "$alwaysExecute",
nonPrefixed: true,
code: `$useChannel[$getServerVar[levels_channel]]
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[req;$sum[$getUserVar[req];50]]
GG <@!$authorID>, je bent zojuist level $sum[$getUserVar[level];1] geworden! <a:PepeTrain:775341872671490078>
$setUserVar[xp;0]
$onlyIf[$getUserVar[xp]>=$getUserVar[req]]
$onlyIf[$getServerVar[levels_channel]!=undefined]`
})

bot.command({
name: "levels-channel",
code: `$argsCheck[>1;Verkeerd gebruik! Gebruik +levels-channel <channel>]
$setServerVar[levels_channel;$mentionedChannels[1;yes]]
$title[Levels Channel]
$description[Voortaan worden Level-Up messages gestuurd naar <#$mentionedChannels[1;yes]>!]
$footer[Ingesteld door $username[$authorID]]
$color[FFD700]
$onlyIf[$channelExists[$mentionedChannels[1]]==true;Dat is geen geldige channel!]
$onlyForIDs[236588847176220672;428272829553967106;Je hebt geen rechten om deze command uit te voeren!]`
})

bot.command({
name: "weather",
aliases: ["weer"],
code: `$thumbnail[https://media.discordapp.net/attachments/785506848638763039/786885629274488832/image0.png]
$title[Het weer in **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**]
$description[Locatie: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;]**
Temperatuur: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;]**
Luchtvochtigheid: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]%**
Windsnelheid: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]**
Windrichting: **$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;]**]
$argsCheck[>1;❌ Geef een locatie!]
$color[FFD700]
$botTyping`
})

bot.command({
name: "<@775687174980370434>",
aliases: ["<@!775687174980370434>"],
nonPrefixed: true,
code: `$title[Hoi! 👋]
$thumbnail[$userAvatar[775687174980370434]]
$description[Mijn naam is <@!775687174980370434> en mijn prefix is **<@775687174980370434>** en \`$getServerVar[prefix]\`!  
Voor een lijst van alle commands, gebruik **+help** of **<@775687174980370434> help**. 
Voor een invite link van de bot, [Klik hier!\\](https://discord.com/oauth2/authorize?client_id=775687174980370434&permissions=8&scope=bot)]
$image[https://cdn.discordapp.com/attachments/616315208251605005/616319462349602816/Tw.gif]
$color[FFD700]`
})

bot.inviteCreateCommand({
channel: "$getServerVar[logchannel]",
code: `$title[Invite gecreëerd voor $serverName!]
$description[**Invite Info:**
**Invite URL:** $inviteURL
**Maker van invite:** <@!$inviteUserID>
**Voor channel:** <#$inviteChannelID>
**Maximaal aantal gebruiken:** $inviteMaxUses]
$color[FFD700]
$thumbnail[$serverIcon]`
})

bot.onInviteCreate()

bot.command({
name: "logchannel",
code: `$title[Logchannel Wijziging]
$description[Ik heb de logchannel gewijzigd naar <#$mentionedChannels[1;yes]>!]
$setServerVar[logchannel;$mentionedChannels[1;yes]]
$onlyPerms[admin;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
})

bot.musicStartCommand({
channel: "$channelID",
code: `$title[Ik speel nu:]
$description[[$songInfo[title]\\]($songInfo[url])]
$footer[Wachtrij: $queueLength]
$color[FFD700]`
})

bot.command({
name: "quote",
code: `$author[$userTag[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]];$userAvatar[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];userID]]]
$description[$getMessage[$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[6]];false;$mentionedChannels[1;yes]];$replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$splitText[7]];false;$noMentionMessage];content]

[Originele message]($replaceText[$replaceText[$checkContains[$message;https://discord.com/channels/;https://ptb.discord.com/channels/];true;$message];false;https://discord.com/channels/$guildID/$mentionedChannels[1;yes]/$noMentionMessage])]
$textSplit[$message;/]
$color[RANDOM]
$suppressErrors[{color:RED} {title:Error} {description:Ik kon het bericht niet vinden.}]`
})

bot.command({
name: "setprefix",
code: `$setServerVar[prefix;$message]
$title[Prefix]
$description[**Ik heb de prefix gewijzigd naar:** \`$message\`]
$addTimestamp
$footer[Oude Prefix: $getServerVar[prefix] | Nieuwe Prefix: $message;$authorAvatar]
$color[FFD700]
$onlyPerms[admin;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
})

bot.command({
name: "ticket",
aliases: ["support"],
code: `$sendMessage[Ik heb een ticket aangemaakt in **$toLowercase[#ticket-$username]**]
$newTicket[ticket-$username;{title:Ticket aangemaakt!} {description:We zullen je zo snel mogelijk helpen. Beschrijf je probleem zo duidelijk mogelijk. Heb alsjeblieft geduld.} {footer:Gebruik $getServerVar[prefix]closeticket om je ticket te closen.} {color:FFD700};no;Er is iets fout gegaan. Probeer het later opnieuw.]`
})

bot.command({
name: "setrecord",
aliases: ["record", "sr"],
code: `$setServerVar[$toLowercase[$message[1]];$message[2]]
$setServerVar[$toLowercase[$message[1]user];$mentioned[1]]
$title[Nieuw record]
$description[Ik heb het nieuwe record gezet voor $message[1] op $message[2]!
Oud record: $getServerVar[$toLowercase[$message[1]]] | <@!$getServerVar[$toLowercase[$message[1]]user]>
Nieuw record: $message[2] | <@!$mentioned[1]>]
$color[FFD700]
$onlyForIDs[428272829553967106;519864656626450454;672463816453390357;236588847176220672;519864656626450454;677508750327808016;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]
$onlyIf[$message[2]>=$getServerVar[$toLowercase[$message[1]]];{color:RED} {description:Dat is niet een record!} {footer: Als je het moet corrigeren, dm ElionW#1234.}]`
})

bot.awaitedCommand({
name: "update",
code: `$editMessage[801809010156240916;{title:$serverName Hall of Fame} {description:**Epic**
$customEmoji[Piper]: $getServerVar[piper]$customEmoji[BStrophy]| <@!$getServerVar[piperuser]>
$customEmoji[Pam]: $getServerVar[pam]$customEmoji[BStrophy] | <@!$getServerVar[pamuser]>
$customEmoji[Frank]: $getServerVar[frank]$customEmoji[BStrophy] | <@!$getServerVar[frankuser]>
$customEmoji[Bibi]: $getServerVar[bibi]$customEmoji[BStrophy] | <@!$getServerVar[bibiuser]>
$customEmoji[Bea]: $getServerVar[bea]$customEmoji[BStrophy] | <@!$getServerVar[beauser]>
$customEmoji[Nani]: $getServerVar[nani]$customEmoji[BStrophy] | <@!$getServerVar[naniuser]>
$customEmoji[Edgar]: $getServerVar[edgar]$customEmoji[BStrophy] | <@!$getServerVar[edgaruser]>

**Mythic**
$customEmoji[Mortis]: $getServerVar[mortis]$customEmoji[BStrophy] | <@!$getServerVar[mortisuser]>
$customEmoji[Tara]: $getServerVar[tara]$customEmoji[BStrophy] | <@!$getServerVar[tarauser]>
$customEmoji[Gene]: $getServerVar[gene]$customEmoji[BStrophy] | <@!$getServerVar[geneuser]>
$customEmoji[Max]: $getServerVar[max]$customEmoji[BStrophy] | <@!$getServerVar[maxuser]>
$customEmoji[MrP]: $getServerVar[mrp]$customEmoji[BStrophy] | <@!$getServerVar[mrpuser]>
$customEmoji[Sprout]: $getServerVar[sprout]$customEmoji[BStrophy] | <@!$getServerVar[sproutuser]>
$customEmoji[Byron]: $getServerVar[byron]$customEmoji[BStrophy] | <@!$getServerVar[byronuser]>} {color:FFD700} {footer:Dit bericht wordt elke 15 seconden geüpdate.} {thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]
$wait[15s]`
})

bot.awaitedCommand({
name: "update2",
code: `$editMessage[801808870271877160;{title:$serverName Hall of Fame} {description:**Trophy Road**
$customEmoji[Shelly]: $getServerVar[shelly]$customEmoji[BStrophy] | <@!$getServerVar[shellyuser]>
$customEmoji[Nita]: $getServerVar[nita]$customEmoji[BStrophy] | <@!$getServerVar[nitauser]>
$customEmoji[Colt]: $getServerVar[colt]$customEmoji[BStrophy] | <@!$getServerVar[coltuser]>
$customEmoji[Bull]: $getServerVar[bull]$customEmoji[BStrophy] | <@!$getServerVar[bulluser]>
$customEmoji[Jessie]: $getServerVar[jessie]$customEmoji[BStrophy] | <@!$getServerVar[jessieuser]>
$customEmoji[Brock]: $getServerVar[brock]$customEmoji[BStrophy] | <@!$getServerVar[brockuser]>
$customEmoji[Dynamike]: $getServerVar[dynamike]$customEmoji[BStrophy] | <@!$getServerVar[dynamikeuser]>
$customEmoji[Bo]: $getServerVar[bo]$customEmoji[BStrophy] | <@!$getServerVar[bouser]>
$customEmoji[Tick]: $getServerVar[tick]$customEmoji[BStrophy] | <@!$getServerVar[tickuser]>
$customEmoji[8Bit]: $getServerVar[bit]$customEmoji[BStrophy] | <@!$getServerVar[bituser]>
$customEmoji[Emz]: $getServerVar[emz]$customEmoji[BStrophy] | <@!$getServerVar[emzuser]>

**Rare**
$customEmoji[ElPrimo]: $getServerVar[elprimo]$customEmoji[BStrophy] | <@!$getServerVar[elprimouser]>
$customEmoji[Barley]: $getServerVar[barley]$customEmoji[BStrophy] | <@!$getServerVar[barleyuser]>
$customEmoji[Poco]: $getServerVar[poco]$customEmoji[BStrophy] | <@!$getServerVar[pocouser]>
$customEmoji[Rosa]: $getServerVar[rosa]$customEmoji[BStrophy] | <@!$getServerVar[rosauser]>
**Super Rare**
$customEmoji[Rico]: $getServerVar[rico]$customEmoji[BStrophy] | <@!$getServerVar[ricouser]>
$customEmoji[Darryl]: $getServerVar[darryl]$customEmoji[BStrophy] | <@!$getServerVar[darryluser]>
$customEmoji[Penny]: $getServerVar[penny]$customEmoji[BStrophy] | <@!$getServerVar[pennyuser]>
$customEmoji[Carl]: $getServerVar[carl]$customEmoji[BStrophy] | <@!$getServerVar[carluser]>
$customEmoji[Jacky]: $getServerVar[jacky]$customEmoji[BStrophy] | <@!$getServerVar[jackyuser]>} {footer:Dit bericht wordt elke 15 seconden geüpdate.} {color:FFD700}
{thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]
$wait[15s]`
})

bot.awaitedCommand({
name: "update3",
code: `$editMessage[801829933227180092;{title:$serverName Hall of Fame} {description: **Legendary**
$customEmoji[Spike]: $getServerVar[spike]$customEmoji[BStrophy] | <@!$getServerVar[spikeuser]>
$customEmoji[Crow]: $getServerVar[crow]$customEmoji[BStrophy] | <@!$getServerVar[crowuser]>
$customEmoji[Leon]: $getServerVar[leon]$customEmoji[BStrophy] | <@!$getServerVar[leonuser]>
$customEmoji[Sandy]: $getServerVar[sandy]$customEmoji[BStrophy] | <@!$getServerVar[sandyuser]>
$customEmoji[Amber]: $getServerVar[amber]$customEmoji[BStrophy] | <@!$getServerVar[amberuser]>

**Chromatic**
$customEmoji[Gale]: $getServerVar[gale]$customEmoji[BStrophy] | <@!$getServerVar[galeuser]>
$customEmoji[Surge]: $getServerVar[surge]$customEmoji[BStrophy] | <@!$getServerVar[surgeuser]>
$customEmoji[Colette]: $getServerVar[colette]$customEmoji[BStrophy] | <@!$getServerVar[coletteuser]>
$customEmoji[Lou]: $getServerVar[lou]$customEmoji[BStrophy] | <@!$getServerVar[louuser]>} {color:FFD700} {footer:Dit bericht wordt elke 15 seconden geüpdate.}
{thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]
$wait[15s]`
})

bot.awaitedCommand({
name: "update4",
code: `$editMessage[807202669914488852;{title:$serverName Hall of Fame} {description: **Trophy & Special Events**
Snelste Brawl Ball Win: $getServerVar[snelste_brawlball_win] | $getServerVar[snelste_brawlball_winuser] $customEmoji[timer]
Snelste Heist Win: $getServerVar[snelste_heist_win] | $getServerVar[snelste_heist_winuser] $customEmoji[timer] 
Snelste Siege Win: $getServerVar[snelste_siege_win] | $getServerVar[snelste_siege_winuser] $customEmoji[timer]
Meeste sterren in Bounty: $getServerVar[meeste_sterren] | $getServerVar[meeste_sterrenuser] $customEmoji[Bounty]
Hoogste level Siege Bot: $getServerVar[hoogste_siege_bot] | $getServerVar[hoogste_siege_botuser] $customEmoji[Siege]
Meeste Powercubes (Solo Showdown): $getServerVar[meeste_powercubes_solo] | $getServerVar[meeste_powercubes_solouser] $customEmoji[SoloShowdown]
Meeste Powercubes (Duo Showdown): $getServerVar[meeste_powercubes_duo] | $getServerVar[meeste_powercubes_duouser] $customEmoji[DuoShowdown]
Super City Rampage Record: $getServerVar[city_rampage] | $getServerVar[city_rampageuser] $customEmoji[rampage]
Boss Fight Record: $getServerVar[boss_fight] | $getServerVar[boss_fightuser] $customEmoji[Bossfight]
Robo Rumble Record: $getServerVar[robo_rumble] | $getServerVar[robo_rumbleuser] $customEmoji[RoboRumble]} {color:FFD700} {footer:Dit bericht wordt elke 15 seconden geüpdate.} {thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg}]
$wait[15s]`
})

bot.interactionCommand({
name: "say",
code: `$interactionReply[{author:$username#$discriminator:$authorAvatar} {description:$message} {color:FFD700} {timestamp}]`
})

bot.interactionCommand({
name: "poll",
code: `$interactionReply[{title:**Nieuwe Poll**} {description:$message} {footer:Poll geschreven door: $username#$discriminator:$authorAvatar} {color:FFD700} {timestamp} {thumbnail:https://media.discordapp.net/attachments/773126566414385166/780776833665728574/xKMXwBRme4gAAAABJRU5ErkJggg.png}]
$useChannel[731139570514526313]`
})

bot.interactionCommand({
name: "ping",
code: `$if[$ping>300]
$interactionReply[{color:RED} {title:Pong! | 🏓} {description:🔴 API | $ping ms} {field:Other:**Transfer Rate** - $roundTenth[$divide[$divide[$multi[$ram;8];$divide[$Ping;1000]];1000];2] Gbps} {footer:$authorID}]
$elseIf[$ping>200]
$interactionReply[{color:YELLOW} {title:Pong! | 🏓} {description:🟡 API | $ping ms} {field:Other:**Transfer Rate** - $roundTenth[$divide[$divide[$multi[$ram;8];$divide[$Ping;1000]];1000];2] Gbps} {footer:$authorID}]
$endelseIf
$elseIf[$ping>100]
$interactionReply[{color:GREEN} {title:Pong! | 🏓} {description:🟢 API | $ping ms} {field:Other:**Transfer Rate** - $roundTenth[$divide[$divide[$multi[$ram;8];$divide[$Ping;1000]];1000];2] Gbps} {footer:$authorID}]
$endelseIf
$elseIf[$ping>1]
$interactionReply[{color:BLUE} {title:Pong! | 🏓} {description:⚪ API | $ping ms} {field:Other:**Transfer Rate** - $roundTenth[$divide[$divide[$multi[$ram;8];$divide[$Ping;1000]];1000];2] Gbps} {footer:$authorID}]
$endelseIf
$endif`
})

bot.onInteractionCreate()

bot.command({
name: "anime", 
description: "Zoekt een anime voor je.",
usage: "+anime <anime titel>",
code: `$title[**$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.romaji;] / $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.titles.japanese;]** ]
$description[

📅 **Gestart/Geëindigd op:** \`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.startDate;] - $jsonRequest[https://api.avux.ga/animesearch?text=$message;text.endDate;]\`\`\`

📖 **Afleveringen:** \`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.episodeCount;] Afleveringen\`\`\`

⭐ **Rating:**\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.averageRating;]\`\`\`

🏆 **Ratings Rank:**\`\`\`
#$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.ratingRank;]\`\`\`

🏆 **Populariteit Rank:**\`\`\`
#$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.popularityRank;]\`\`\`

📜 **Synopsis:**\`\`\`
$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.synopsis;]\`\`\`
]
$color[FFD700]
$image[$jsonRequest[https://api.avux.ga/animesearch?text=$message;text.posterImage.medium;]]
$footer[Aangevraagd door $username#$discriminator;$authorAvatar]
$addTimestamp
$onlyIf[$message[1]!=;{color:RED} {description:Er was geen anime gegeven!}]`
})

bot.command({
name: "reboot",
aliases: ["restart", "reload"],
code: `$reboot[server.js]
$wait[3s]
$title[Reboot]
$description[De bot wordt gereboot in 3 seconden...]
$addTimestamp
$color[FFD700]
$onlyForIDs[428272829553967106;236588847176220672;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
})

bot.loopCommand({
code: `$editMessage[801809010156240916;{title:$serverName Hall of Fame} {description:**Epic**
$customEmoji[Piper]: $getServerVar[piper]$customEmoji[BStrophy]| <@!$getServerVar[piperuser]>
$customEmoji[Pam]: $getServerVar[pam]$customEmoji[BStrophy] | <@!$getServerVar[pamuser]>
$customEmoji[Frank]: $getServerVar[frank]$customEmoji[BStrophy] | <@!$getServerVar[frankuser]>
$customEmoji[Bibi]: $getServerVar[bibi]$customEmoji[BStrophy] | <@!$getServerVar[bibiuser]>
$customEmoji[Bea]: $getServerVar[bea]$customEmoji[BStrophy] | <@!$getServerVar[beauser]>
$customEmoji[Nani]: $getServerVar[nani]$customEmoji[BStrophy] | <@!$getServerVar[naniuser]>
$customEmoji[Edgar]: $getServerVar[edgar]$customEmoji[BStrophy] | <@!$getServerVar[edgaruser]>

**Mythic**
$customEmoji[Mortis]: $getServerVar[mortis]$customEmoji[BStrophy] | <@!$getServerVar[mortisuser]>
$customEmoji[Tara]: $getServerVar[tara]$customEmoji[BStrophy] | <@!$getServerVar[tarauser]>
$customEmoji[Gene]: $getServerVar[gene]$customEmoji[BStrophy] | <@!$getServerVar[geneuser]>
$customEmoji[Max]: $getServerVar[max]$customEmoji[BStrophy] | <@!$getServerVar[maxuser]>
$customEmoji[MrP]: $getServerVar[mrp]$customEmoji[BStrophy] | <@!$getServerVar[mrpuser]>
$customEmoji[Sprout]: $getServerVar[sprout]$customEmoji[BStrophy] | <@!$getServerVar[sproutuser]>
$customEmoji[Byron]: $getServerVar[byron]$customEmoji[BStrophy] | <@!$getServerVar[byronuser]>} {color:FFD700} {footer:Dit bericht wordt elke 15 seconden geüpdate.} {thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]
$editMessage[801829933227180092;{title:$serverName Hall of Fame} {description: **Legendary**
$customEmoji[Spike]: $getServerVar[spike]$customEmoji[BStrophy] | <@!$getServerVar[spikeuser]>
$customEmoji[Crow]: $getServerVar[crow]$customEmoji[BStrophy] | <@!$getServerVar[crowuser]>
$customEmoji[Leon]: $getServerVar[leon]$customEmoji[BStrophy] | <@!$getServerVar[leonuser]>
$customEmoji[Sandy]: $getServerVar[sandy]$customEmoji[BStrophy] | <@!$getServerVar[sandyuser]>
$customEmoji[Amber]: $getServerVar[amber]$customEmoji[BStrophy] | <@!$getServerVar[amberuser]>

**Chromatic**
$customEmoji[Gale]: $getServerVar[gale]$customEmoji[BStrophy] | <@!$getServerVar[galeuser]>
$customEmoji[Surge]: $getServerVar[surge]$customEmoji[BStrophy] | <@!$getServerVar[surgeuser]>
$customEmoji[Colette]: $getServerVar[colette]$customEmoji[BStrophy] | <@!$getServerVar[coletteuser]>
$customEmoji[Lou]: $getServerVar[lou]$customEmoji[BStrophy] | <@!$getServerVar[louuser]>} {color:FFD700} {footer:Dit bericht wordt elke 15 seconden geüpdate.}
{thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]
$editMessage[801808870271877160;{title:$serverName Hall of Fame} {description:**Trophy Road**
$customEmoji[Shelly]: $getServerVar[shelly]$customEmoji[BStrophy] | <@!$getServerVar[shellyuser]>
$customEmoji[Nita]: $getServerVar[nita]$customEmoji[BStrophy] | <@!$getServerVar[nitauser]>
$customEmoji[Colt]: $getServerVar[colt]$customEmoji[BStrophy] | <@!$getServerVar[coltuser]>
$customEmoji[Bull]: $getServerVar[bull]$customEmoji[BStrophy] | <@!$getServerVar[bulluser]>
$customEmoji[Jessie]: $getServerVar[jessie]$customEmoji[BStrophy] | <@!$getServerVar[jessieuser]>
$customEmoji[Brock]: $getServerVar[brock]$customEmoji[BStrophy] | <@!$getServerVar[brockuser]>
$customEmoji[Dynamike]: $getServerVar[dynamike]$customEmoji[BStrophy] | <@!$getServerVar[dynamikeuser]>
$customEmoji[Bo]: $getServerVar[bo]$customEmoji[BStrophy] | <@!$getServerVar[bouser]>
$customEmoji[Tick]: $getServerVar[tick]$customEmoji[BStrophy] | <@!$getServerVar[tickuser]>
$customEmoji[8Bit]: $getServerVar[bit]$customEmoji[BStrophy] | <@!$getServerVar[bituser]>
$customEmoji[Emz]: $getServerVar[emz]$customEmoji[BStrophy] | <@!$getServerVar[emzuser]>

**Rare**
$customEmoji[ElPrimo]: $getServerVar[elprimo]$customEmoji[BStrophy] | <@!$getServerVar[elprimouser]>
$customEmoji[Barley]: $getServerVar[barley]$customEmoji[BStrophy] | <@!$getServerVar[barleyuser]>
$customEmoji[Poco]: $getServerVar[poco]$customEmoji[BStrophy] | <@!$getServerVar[pocouser]>
$customEmoji[Rosa]: $getServerVar[rosa]$customEmoji[BStrophy] | <@!$getServerVar[rosauser]>
**Super Rare**
$customEmoji[Rico]: $getServerVar[rico]$customEmoji[BStrophy] | <@!$getServerVar[ricouser]>
$customEmoji[Darryl]: $getServerVar[darryl]$customEmoji[BStrophy] | <@!$getServerVar[darryluser]>
$customEmoji[Penny]: $getServerVar[penny]$customEmoji[BStrophy] | <@!$getServerVar[pennyuser]>
$customEmoji[Carl]: $getServerVar[carl]$customEmoji[BStrophy] | <@!$getServerVar[carluser]>
$customEmoji[Jacky]: $getServerVar[jacky]$customEmoji[BStrophy] | <@!$getServerVar[jackyuser]>} {footer:Dit bericht wordt elke 15 seconden geüpdate.} {color:FFD700}
{thumbnail:https://media.discordapp.net/attachments/785506848638763039/801750840418369554/image0.jpg};738503909072568370]`,
channel: "738503909072568370",
executeOnStartup: true,
every: 15000
})

bot.command({
name: "meme",
code: `$title[$jsonRequest[https://api.techhost.cc/meme;title;]]
$image[$jsonRequest[https://api.techhost.cc/meme;link;]]
$color[FFD700]
$addTimestamp
$footer[Meme aangevraagd door $userTag.]
$botTyping`
})

bot.command({
name: "load-backup",
code: `$if[$message[1]==1]
$setServerVar[shelly;1008]
$setServerVar[bull;811]
$setServerVar[nita;818]
$setServerVar[colt;964]
$setServerVar[jessie;846]
$setServerVar[brock;874]
$setServerVar[bo;1009]
$setServerVar[dynamike;904]
$setServerVar[tick;1004]
$setServerVar[emz;867]
$setServerVar[bit;803]
$setServerVar[elprimo;837]
$setServerVar[barley;759]
$setServerVar[poco;930]
$setServerVar[rosa;937]
$setServerVar[carl;1000]
$setServerVar[jacky;852]
$setServerVar[rico;805]
$setServerVar[penny;780]
$setServerVar[darryl;852]
$setServerVar[piper;820]
$setServerVar[pam;801]
$setServerVar[frank;828]
$setServerVar[edgar;835]
$setServerVar[bibi;851]
$setServerVar[bea;1068]
$setServerVar[nani;830]
$setServerVar[mortis;824]
$setServerVar[gene;902]
$setServerVar[tara;904]
$setServerVar[mortis;824]
$setServerVar[max;1016]
$setServerVar[mrp;909]
$setServerVar[sprout;904]
$setServerVar[byron;1001]
$setServerVar[leon;879]
$setServerVar[spike;913]
$setServerVar[amber;853]
$setServerVar[crow;818]
$setServerVar[sandy;864]
$setServerVar[gale;888]
$setServerVar[surge;817]
$setServerVar[lou;862]
$setServerVar[colette;909]
$setServerVar[shellyuser;677508750327808016]
$setServerVar[bulluser;708093801033367645]
$setServerVar[nitauser;624941075613614112]
$setServerVar[coltuser;428272829553967106]
$setServerVar[jessieuser;708093801033367645]
$setServerVar[brockuser;351980556700876811]
$setServerVar[dynamikeuser;351980556700876811]
$setServerVar[bouser;708093801033367645]
$setServerVar[tickuser;354312844851937282]
$setServerVar[emzuser;708093801033367645]
$setServerVar[bituser;236588847176220672]
$setServerVar[elprimouser;677508750327808016]
$setServerVar[barleyuser;354312844851937282]
$setServerVar[pocouser;236588847176220672]
$setServerVar[rosauser;351980556700876811]
$setServerVar[carluser;354312844851937282]
$setServerVar[jackyuser;236588847176220672]
$setServerVar[ricouser;354312844851937282]
$setServerVar[pennyuser;351980556700876811]
$setServerVar[darryluser;677508750327808016]
$setServerVar[piperuser;354312844851937282]
$setServerVar[pamuser;354312844851937282]
$setServerVar[frankuser;236588847176220672]
$setServerVar[beauser;677508750327808016]
$setServerVar[edgaruser;236588847176220672]
$setServerVar[bibiuser;354312844851937282]
$setServerVar[naniuser;677508750327808016]
$setServerVar[geneuser;354312844851937282]
$setServerVar[tarauser;708093801033367645]
$setServerVar[mortisuser;236588847176220672> & <@!428272829553967106]
$setServerVar[maxuser;708093801033367645]
$setServerVar[mrpuser;354312844851937282]
$setServerVar[sproutuser;354312844851937282]
$setServerVar[byronuser;708093801033367645]
$setServerVar[leonuser;351980556700876811]
$setServerVar[spikeuser;428272829553967106]
$setServerVar[amberuser;354312844851937282]
$setServerVar[crowuser;354312844851937282]
$setServerVar[sandyuser;354312844851937282]
$setServerVar[galeuser;351980556700876811]
$setServerVar[surgeuser;428272829553967106]
$setServerVar[louuser;351980556700876811]
$setServerVar[coletteuser;708093801033367645]
$endif
$onlyPerms[admin;{color:RED} {description:Je hebt geen rechten om deze command uit te voeren!}]`
})

bot.command({
name: "$alwaysExecute",
nonPrefixed: true,
code: `
$if[$hour<12]
$reply[$messageID;Goedemorgen <@!$authorID>! $customEmoji[peepohey];yes]
$elseIf[$hour>=12]
$reply[$messageID;Goedemiddag <@!$authorID>! $customEmoji[peepohey];yes]
$endelseIf
$endif
$timezone[Europe/Amsterdam]
$onlyIf[$checkContains[$toLowercase[$message];gm;mogguh;goedemorgen;goeiemorgen;goedemiddag;goeiemiddag]==true]`
})

bot.command({
name: "$alwaysExecute",
nonPrefixed: true,
code: `$reply[$messageID;Welterusten <@!$authorID>! $customEmoji[peepoSleep] $customEmoji[peepoHey];yes]
$onlyIf[$checkContains[$toLowercase[$message];gn;welterusten;truste;welteruste]==true]`
})

bot.command({
name: "$alwaysExecute",
nonPrefixed: true,
code: `$reply[$messageID;Goedenavond <@!$authorID>! $customEmoji[peepoHey];yes]
$onlyIf[$checkContains[$toLowercase[$message];goeieavond;goedenavond;goedeavond]==true]`
})

bot.command({
name: "gems",
code: `$reactionCollector[$splitText[1];$authorID;1m;1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;gems1,gems2,gems3,gems4,gems5;yes]
$textSplit[$sendMessage[{title:**Brawl Stars Hack**} {description:Hoeveel $customEmoji[bsGem] wil je generaten?


1️⃣ - **80 $customEmoji[bsGem]
2️⃣ - 170 $customEmoji[bsGem]
3️⃣ - 360 $customEmoji[bsGem]
4️⃣ - 950 $customEmoji[bsGem]
5️⃣ - 2000** $customEmoji[bsGem]} {color:#79F232};yes]; ]`
})

bot.awaitedCommand({
name: "gems1",
code: `$wait[3s]
$setUserVar[gems;80]
$editMessage[$message[1];{title:**Brawl Stars Hack**} {color:#79F232} {description:Je koos 80 $customEmoji[bsGem] 
*Gems zullen generated worden, een ogenblik geduld...*} {execute:generate};$channelID]
$clearReactions[$channelID;$message[1];all]`
})

bot.awaitedCommand({
name: "gems2",
code: `$wait[3s]
$setUserVar[gems;170]
$editMessage[$message[1];{title:**Brawl Stars Hack**} {color:#79F232} {description:Je koos **170** $customEmoji[bsGem] 
*Gems zullen generated worden, een ogenblik geduld...*} {execute:generate};$channelID]
$clearReactions[$channelID;$message[1];all]
`
})

bot.awaitedCommand({
name: "gems3",
code: `$wait[3s]
$setUserVar[gems;360]
$editMessage[$message[1];{title:**Brawl Stars Hack**} {color:#79F232} {description:Je koos **360** $customEmoji[bsGem] 
*Gems zullen generated worden, een ogenblik geduld...*} {execute:generate};$channelID]
$clearReactions[$channelID;$message[1];all]
`
})
    
bot.awaitedCommand({
name: "gems4",
code: `$wait[3s]
$setUserVar[gems;950]
$editMessage[$message[1];{title:**Brawl Stars Hack**} {color:#79F232} {description:Je koos **950** $customEmoji[bsGem] 
*Gems zullen generated worden, een ogenblik geduld...*} {execute:generate};$channelID]
$clearReactions[$channelID;$message[1];all]
`
})

bot.awaitedCommand({
name: "gems5",
code: `$wait[3s]
$setUserVar[gems;2000]
$editMessage[$message[1];{title:**Brawl Stars Hack**} {color:#79F232} {description:Je koos **2000** $customEmoji[bsGem]
*Gems zullen generated worden, een ogenblik geduld...*} {execute:generate};$channelID]
$clearReactions[$channelID;$message[1];all]
`
})

bot.awaitedCommand({
name: "generate",
code: `$editMessage[$splitText[1];**$math[$getUserVar[gems]/5] $customEmoji[bsGem] gegenereerd** \`20%\`]
$wait[2s]
$textSplit[$sendMessage[**$getUserVar[gems] $customEmoji[bsGem] worden gegenereerd...**;yes]; ]
$wait[3s]
`
})

//bot.command({
  //name: '$alwaysExecute',
  //code: `$if[$random[1;2000]==10]
  //$endif
 // `
//})

bot.loadCommands(`./commands/`)

keepAlive()