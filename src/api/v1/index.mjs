import express from "express";
import contactRoutes from "./contacts/contact.routes.mjs";

const router = express.Router();
router.use("/contacts", contactRoutes);
export default router;
