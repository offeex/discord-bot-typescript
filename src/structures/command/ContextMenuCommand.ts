import {ChatInputCommandInteraction, ContextMenuCommandBuilder,
    ContextMenuCommandInteraction, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder} from "discord.js";
import {Command, CommandExecute} from "../Command";

export class ContextMenuCommand extends Command {
    constructor(
        public data: ContextMenuCommandBuilder,
        public execute: CommandExecute<ContextMenuCommandInteraction>
    ) {
        super()
    }
}