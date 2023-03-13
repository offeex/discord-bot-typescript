import {ChatInputCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder} from "discord.js";
import {Command, CommandExecute} from "../Command";

type SlashCommandData =
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>

export class SlashCommand extends Command {
    constructor(
        public data: SlashCommandData,
        public execute: CommandExecute<ChatInputCommandInteraction>
    ) {
        super()
    }
}