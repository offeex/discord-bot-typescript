import {
	ChatInputCommandInteraction,
	ContextMenuCommandBuilder,
	ContextMenuCommandInteraction,
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js'
import { ExtendedClient } from './Client'

export type CommandData =
	| SlashCommandBuilder
	| SlashCommandSubcommandsOnlyBuilder
	| Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>
	| ContextMenuCommandBuilder
export type CommandExecute = (
	interaction: ContextMenuCommandInteraction | ChatInputCommandInteraction,
	client: ExtendedClient
) => any

export class Command {
	constructor(public data: CommandData, public execute: CommandExecute) {}
}
