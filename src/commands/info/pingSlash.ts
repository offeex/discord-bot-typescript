import { Command } from '../../structures/Command'
import {
	ButtonStyle,
	ComponentType,
	SlashCommandBuilder,
	TextInputStyle,
} from 'discord.js'

export default new Command(
	new SlashCommandBuilder().setName('ping-slash').setDescription('Pong!'),
	async interaction => {
		await interaction.reply('Pong!')
	}
)