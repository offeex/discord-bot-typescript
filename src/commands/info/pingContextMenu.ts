import { Command } from '../../structures/Command'
import {
	ApplicationCommandType,
	ButtonStyle,
	ComponentType,
	ContextMenuCommandBuilder,
	TextInputStyle,
} from 'discord.js'
import { ContextMenuCommand } from '../../structures/command/ContextMenuCommand'

export default new ContextMenuCommand(
	new ContextMenuCommandBuilder()
		.setName('ping-context-menu')
		.setType(ApplicationCommandType.Message),
	async interaction => {
		await interaction.reply('Pong!')
	}
)