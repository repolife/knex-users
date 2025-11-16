import {
	addNewContact,
	getContacts,
	getContactWithID,
	updateContact,
	deleteContact,
} from "../controllers/crmController.js";
import {
	register,
	login,
	getUsers,
	loginRequired,
} from "../controllers/userController.js";

const routes = (app) => {
	app
		.route("/contacts")
		.get(loginRequired, getContacts)
		.post(loginRequired, addNewContact);

	app
		.route("/contact/:contactId")
		.get(loginRequired, getContactWithID)
		.put(loginRequired, updateContact)
		.delete(loginRequired, deleteContact);

	app.route("/users").get(loginRequired, getUsers);

	// auth routes
	app.route("/register").post(register);

	app.route("/login").post(login);
};

export default routes;
