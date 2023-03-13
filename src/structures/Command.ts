import {
	ChatInputCommandInteraction,
	CommandInteraction,
	ContextMenuCommandBuilder,
	ContextMenuCommandInteraction,
	SlashCommandBuilder,
	SlashCommandSubcommandsOnlyBuilder,
} from 'discord.js'
import { ExtendedClient } from './Client'

// export type CommandData<T> =
// 	| SlashCommandBuilder
// 	| SlashCommandSubcommandsOnlyBuilder
// 	| Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>
// 	| ContextMenuCommandBuilder
export type CommandExecute<T extends CommandInteraction> = (
	interaction: T,
	client: ExtendedClient
) => any
// export type CommandExecute<T extends CommandInteraction> = (
// 	interaction: ContextMenuCommandInteraction | ChatInputCommandInteraction,
// 	client: ExtendedClient
// ) => any

export abstract class Command {
	public abstract data: any
	public abstract execute: CommandExecute<any>
}
