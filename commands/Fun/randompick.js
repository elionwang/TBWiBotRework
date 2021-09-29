module.exports = {
name: "randompick", 
description: "De bot kiest een random brawler en random map voor je.",
usage: "+randompick",
code: `$title[Random Pick]
$description[**Speel...** $randomText[8-Bit;Bo;Brock;Bull;Colt;Dynamike;Emz;Jessie;Nita;Shelly;Tick;Barley;El Primo;Poco;Rosa;Jacky;Darryl;Rico;Carl;Penny;Piper;Bibi;Nani;Bea;Frank;Pam;Edgar;Max;Mortis;Sprout;Mr.P;Gene;Tara;Byron;Amber;Leon;Crow;Spike;Sandy;Colette;Surge;Gale;Lou;Colonel Ruffs;Belle]]
$footer[Waarom doe je dit jezelf aan;$authorAvatar]
$color[RANDOM]
$editIn[3s;{title:Random Pick} {description:**In:** $randomText[Gem Grab;Brawl Ball;Solo SD;Duo SD;Heist;Bounty;Hot Zone;Random Map Maker Submission;Knockout;Map Maker Winner;]} {footer:Waarom doe je dit jezelf aan:$authorAvatar} {color:RANDOM}]` 
}
