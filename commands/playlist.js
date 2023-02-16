const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos!'"),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/watch?v=dSiXhiodI_o")
    }
}
