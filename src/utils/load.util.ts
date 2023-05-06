import {globSync} from 'glob'
import {Event} from '../structures/Event'
import {ClientEvents, Collection} from 'discord.js'
import {Command} from '../structures/Command'
import Button from '../structures/Button'
import {ExtendedClient} from '../structures/Client'
import Modal from "../structures/Modal";

function getFiles(folder: string) {
	return globSync(`${__dirname}/../impl/${folder}/**/*.{js,ts}`)
}

function loadEvents(client: ExtendedClient) {
	for (const file of getFiles('events')) {
		const { event, execute }: Event<keyof ClientEvents> = require(file).default
		client.on(event, execute)
	}
}

function loadCommands(map: Collection<string, Command>) {
	for (const file of getFiles('commands')) {
		const command: Command = require(file).default
		if (!command) continue
		map.set(command.data.name, command)
	}
}

function loadButtons(map: Collection<string, Button>) {
	for (const file of getFiles('buttons')) {
        const button: Button = require(file).default
        if (!button) continue

        if (Array.isArray(button.customId))
            for (const id of button.customId) map.set(id, button)
        else map.set(button.customId, button)
    }
}

// TODO: Merge Buttons and Modals
function loadModals(map: Collection<string, Modal>) {
	for (const file of getFiles('modals')) {
        const modal: Modal = require(file).default
        if (!modal) continue

        if (Array.isArray(modal.customId))
            for (const id of modal.customId) map.set(id, modal)
        else map.set(modal.customId, modal)
    }
}

export function load(client: ExtendedClient) {
	loadEvents(client)
	loadCommands(client.commands)
	loadButtons(client.buttons)
	loadModals(client.modals)
}
