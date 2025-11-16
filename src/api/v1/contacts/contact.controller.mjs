import { db } from "../../../config/knex.mjs";

export const addNewContact = async (req, res) => {
	try {
		const { firstName, lastName, email, company, phone } = req.body;
		const [newContact] = await db("contacts")
			.insert({ firstName, lastName, email, company, phone })
			.returning("*");
		res.json(newContact);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getContacts = async (req, res) => {
	try {
		const contacts = await db("contacts").select("*");
		res.json(contacts);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const getContactWithID = async (req, res) => {
	try {
		const contact = await db("contacts")
			.where({ id: req.params.contactId })
			.first();
		if (!contact) {
			return res.status(404).send("Contact not found");
		}
		res.json(contact);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const updateContact = async (req, res) => {
	const { contactId } = req.params;
	try {
		const { firstName, lastName, email, company, phone } = req.body;
		const [updateContact] = await db("contacts")
			.where({ id: contactId })
			.update({ firstName, lastName, email, company, phone })
			.returning("*");

		if (!updateContact) {
			res.status(404).send("Contact not found");
		}
	} catch (error) {
		res.status(500).send(error.message);
	}
};

export const deleteContact = async (req, res) => {
	try {
		const { contactId } = req.params;
		const deletedRows = await db("contacts").where({ id: contactId }).del();

		if (deletedRows === 0) {
			return res.status(404).send("Contact not found");
		}
		res.json({ message: "Successfully deleted contact" });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const contactController = {
	addNewContact,
	getContacts,
	getContactWithID,
	updateContact,
	deleteContact,
};

export default contactController;
