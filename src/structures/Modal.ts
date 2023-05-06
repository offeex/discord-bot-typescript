import { ModalSubmitInteraction } from "discord.js";

export default class Modal {
  constructor(
    public customId: string | string[],
    public execute: (interaction: ModalSubmitInteraction) => Promise<any> | any
  ) {}
}