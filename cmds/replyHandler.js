//replyHandler.js
//The script that handles replying to slash commands.
//Also handles some console output.

const { MessageEmbed } = require("discord.js")
const errorColor = "#ff0000"
const successColor = "#00ff00"

/*HELP EMBED
const info = (user) => {
  return new MessageEmbed()
    .setTitle("Info Menu/Command List")
    .setDescription("Welcome to the info menu! This menu shows every command that you can run for this bot, along with some other stuff.")
    .addField("/createcharacter", "Creates a character with a name and a description.")
    .addField("/editcharacter", "Allows you to edit a characters name, description and/or image.")
    .addField("/deletecharacter", "Deletes a character that has the given name.")
    .addField("/viewcharacter", "Views a character owned by the user given")
    .addField("/listcharacters", "Lists all your character's by names only.")
    .addField("__Other Stuff__", "- GitHub Page: https://github.com/robloxbloxxer50/roleplay-bot")
    .setColor("ffff00")
    .setFooter(footerText(user.tag), user.avatarURL({dynamic: true}))
} 
*/

//Function to make footer text cuz im lazy
function footerText(user) {
  return "Bot made by Bloxxer#8729 | RAWR"
}

//Error giving role
const errorRole = (user, err) => {
    return new MessageEmbed()
        .setTitle("Error Giving/Removing Role")
        .setDescription("There was an error giving/removing this role from you. Please send this to the owner:\n```js\n"+err+"\n```")
        .setColor(errorColor)
        .setFooter(footerText(user.tag), user.avatarURL({ dynamic: true }))
}

//Invalid Role
const invalidRole = (user) => {
    return new MessageEmbed()
        .setTitle("Invalid Role!")
        .setDescription("Failed to give you this role because it's not public!")
        .setColor(errorColor)
        .setFooter(footerText(user.tag), user.avatarURL({ dynamic: true }))
}

//Given Role Successfully
const givenRole = (user, option) => {
    return new MessageEmbed()
        .setTitle("Given Role Successfully!")
        .setDescription("Successfully given role <@"+option+">!")
        .setColor(successColor)
        .setFooter(footerText(user.tag), user.avatarURL({ dynamic: true }))
}

//Removed Role Successfully
const removedRole = (user, option) => {
    return new MessageEmbed()
        .setTitle("Removed Role")
        .setDescription("Successfully removed role <@"+option+">!")
        .setColor(successColor)
        .setFooter(footerText(user.tag), user.avatarURL({ dynamic: true }))
}


//Exporting functions
exports.errorRole = errorRole
exports.invalidRole = invalidRole
exports.givenRole = givenRole
exports.removedRole = removedRole