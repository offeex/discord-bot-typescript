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