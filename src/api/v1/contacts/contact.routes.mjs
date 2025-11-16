import express from "express";
import contactController from "./contact.controller.mjs";

const contactRoutes = express.Router();

contactRoutes
	.route("/")
	.get(contactController.getContacts)
	.post(contactController.addNewContact);

contactRoutes
	.route("/:contactId")
	.get(contactController.getContactWithID)
	.put(contactController.updateContact)
	.delete(contactController.deleteContact);

export default contactRoutes;
