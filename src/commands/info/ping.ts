import { Command } from '../../structures/Command'
import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    SlashCommandBuilder,
} from 'discord.js'

export default new Command(
    new SlashCommandBuilder().setName('ping').setDescription('Pong!'),
    async interaction => {

        // const collector = interaction.channel({})

        const row = new ButtonBuilder()
            .setCustomId('ping')
            .setLabel('Ping')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('🏓')

        const action = new ActionRowBuilder<ButtonBuilder>().addComponents(row)

        await interaction.reply({
            content: `Pong!`,
            ephemeral: true,
            components: [action],
        })
    }
)