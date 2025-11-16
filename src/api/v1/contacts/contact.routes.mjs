import express from "express";
import contactController from "./contact.controller.mjs";

const contactRoutes = express.Router();

contactRoutes.get("/", contactController.getContacts);
contactRoutes.post("/", contactController.addNewContact);
contactRoutes.put("/:contactId", contactController.updateContact);
contactRoutes.get("/:contactId", contactController.getContactWithID);
contactRoutes.delete("/:contactId", contactController.deleteContact);

export default contactRoutes;
