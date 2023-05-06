import { ContextMenuCommandBuilder, ContextMenuCommandInteraction } from 'discord.js'
import { Command, CommandExecute } from '../Command'

export class ContextMenuCommand extends Command {
    constructor(
        public data: ContextMenuCommandBuilder,
        public execute: CommandExecute<ContextMenuCommandInteraction>
    ) {
        super()
    }
}