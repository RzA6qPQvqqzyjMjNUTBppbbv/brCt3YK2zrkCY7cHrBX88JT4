async function fetchuser() {
    const id = document.getElementById("userid").value;
    const asd = await fetch(`https://japi.rest/discord/v1/user/${id}`).then(res => res.json())

    document.getElementById("content").style.display = "flex";
    document.getElementById("username").textContent = asd.data.tag;
    document.getElementById("bio").textContent = asd.data.bio || ``;
    let text = asd.data.public_flags_array.join(` `)
    text = text.replace("NITRO", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972928999846191194/2937-discord-nitro.png\" height=\"20px\">")
    text = text.replace("EARLY_VERIFIED_BOT_DEVELOPER", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972939594016358420/1564-badge-developer.png\" height=\"20px\">")
    text = text.replace("VERIFIED_BOT", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929009572802601/8207-bottag.png\" height=\"20px\">")
    text = text.replace("DISCORD_EMPLOYEE", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929008771661904/8485-discord-employee.png\" height=\"20px\">")
    text = text.replace("PARTNERED_SERVER_OWNER", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929002228580383/6714-discord-partner.png\" height=\"20px\">")
    text = text.replace("BUGHUNTER_LEVEL_1", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972928996591403089/7732-discord-bughunterlv1.png\" height=\"20px\">")
    text = text.replace("BUGHUNTER_LEVEL_2", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929009224671242/7904-discord-bughunterlv2.png\" height=\"20px\">")
    text = text.replace("HYPESQUAD_EVENTS", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929000555053106/3809-discord-hypesquad.png\" height=\"20px\">")
    text = text.replace("EARLY_SUPPORTER", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972929000114638868/3121-discord-earlysupporter.png\" height=\"20px\">")
    text = text.replace("DISCORD_CERTIFIED_MODERATOR", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972938524082978927/2047-certifiedmoderator.png\" height=\"20px\">")
    text = text.replace("BOOSTER_24", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937496415576094/9.png\" height=\"20px\">")
    text = text.replace("BOOSTER_12", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937496990199868/6.png\" height=\"20px\">")
    text = text.replace("BOOSTER_15", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937496818225262/7.png\" height=\"20px\">")
    text = text.replace("BOOSTER_18", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937496633692220/8.png\" height=\"20px\">")
    text = text.replace("BOOSTER_1", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937498001027082/1.png\" height=\"20px\">")
    text = text.replace("BOOSTER_2", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937497829064734/2.png\" height=\"20px\">")
    text = text.replace("BOOSTER_3", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937497623552060/3.png\" height=\"20px\">")
    text = text.replace("BOOSTER_6", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937497418027028/4.png\" height=\"20px\">")
    text = text.replace("BOOSTER_9", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972937497199902720/5.png\" height=\"20px\">")
    text = text.replace("HOUSE_BALANCE", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972924990238388274/balance.png\" height=\"20px\">")
    text = text.replace("HOUSE_BRAVERY", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972928996939542658/1247-discord-bravery.png\" height=\"20px\">")
    text = text.replace("HOUSE_BRILLIANCE", "<img src=\"https://media.discordapp.net/attachments/889282249441296395/972928999527440464/1350-discord-brillance.png\" height=\"20px\">")
    document.getElementById("badges").innerHTML = text;
    
    let avatar = ""
    if(asd.data.avatarURL == null){
        avatar = "https://media.discordapp.net/attachments/889282249441296395/973035710196092928/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.webp"
    } else {
        avatar = asd.data.avatarURL + "?size=4096"
    }
    document.getElementById("avatar").src = avatar;
    let banner = ""
    if(asd.data.bannerURL == null){
        banner = "https://singlecolorimage.com/get/313131/600x240"
    } else {
        banner = asd.data.bannerURL + "?size=4096"
    }
    document.getElementById("banner").src = banner;
}
