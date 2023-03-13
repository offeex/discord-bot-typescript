import { config } from 'dotenv'
import {
	ApplicationCommandType,
	ContextMenuCommandBuilder,
	GatewayIntentBits,
} from 'discord.js'
import { ExtendedClient } from './structures/Client'

config()

export const client = new ExtendedClient()
client.start().then(() => console.log('Started!'))

// const cm = new ContextMenuCommandBuilder()
// 	.setName('test')
// 	.setType(ApplicationCommandType.User)
//
// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isUserContextMenuCommand()) return
//
// 	const { username } = interaction.targetUser
// 	console.log(username)
// 	interaction.reply(`Hello, ${username}!`)
// })
