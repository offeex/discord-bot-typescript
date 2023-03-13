import {SlashCommandBuilder} from 'discord.js'
import {SlashCommand} from '../../structures/command/SlashCommand'

export default new SlashCommand(
    new SlashCommandBuilder().setName('ping-slash').setDescription('Pong!'),
    async interaction => {
        await interaction.reply('Pong!')
    }
)