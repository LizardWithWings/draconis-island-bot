//Character Edit Command
//Command used to modify character data.

require("dotenv").config()
const reply = require("./replyHandler.js")

const role = {
    type: "slash",
    name: "role",
    description: "Add or remove a role from your profile!",
    options: [
        {
            name: "role",
            description: "The role you want to get/remove",
            type: "ROLE",
            required: true
        },
    ],

    async execute({interaction}) {
      const invalidRoles = [
        "The Master Of The Rawrs 🐲🐲🐲"
        "Counsel Of Draggies 👮‍♀️🐉";
        "Active Dragonfolk 💬🐲";
        "Dragonfolk 🐲";
        "Bot Draggies";
        "Dyno",
        "Tatsu",
        "Tempo",
        "Arcane"
      ]

      await if (interaction.options.getRole("role").name == invalidRoles) {
        interaction.reply({
          embeds: [
            reply.invalidRole(interaction.user)
          ]
        })
        return
      }

      try {
        const guildMember = interaction.guild.members.fetch(interaction.user.id)

        for (var i = 0, i < guildMember.roles.cache.length, i++) {
          if (guildMember.roles.cache[i].id == interaction.options.getRole("role").id) {
            await guildMember.roles.remove(interaction.options.getRole("role"))

            interaction.reply({
              embeds: [
                reply.removedRole(interaction.user, interaction.options.getRole("role"))
              ]
            })

            break
          } else if (i == guildMember.roles.cache.length) {
            await guildMember.roles.add(interaction.options.getRole("role"))

            interaction.reply({
              embeds: [
                reply.givenRole(interaction.user, interaction.options.getRole("role"))
              ]
            })

            break
          }
        }
      } catch (err) {
        interaction.reply({
          embeds: [
            reply.errorRole(interaction.user, err)
          ]
        })
      }
  }
}


exports.cmd = role