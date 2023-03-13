import {
	ChatInputCommandInteraction,
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js'

export type CommandData =
	| SlashCommandBuilder
	| SlashCommandSubcommandsOnlyBuilder
	| Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>
export type CommandExecute = (interaction: ChatInputCommandInteraction) => any

export class Command {
	constructor(public data: CommandData, public execute: CommandExecute) {}
}
