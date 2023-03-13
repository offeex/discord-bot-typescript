import { Command } from '../../structures/Command'
import {
	ApplicationCommandType,
	ButtonStyle,
	ComponentType,
	ContextMenuCommandBuilder,
	TextInputStyle,
} from 'discord.js'

export default new Command(
	new ContextMenuCommandBuilder()
		.setName('ping-context-menu')
		.setType(ApplicationCommandType.Message),
	async interaction => {
		await interaction.reply('Pong!')
	}
)