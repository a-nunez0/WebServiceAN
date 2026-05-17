const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: gets all the contacts
 *     responses:
 *       200:
 *         description: contacts found
 */
router.get("/", contactsController.getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: gets one contact by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: contact found
 */
router.get("/:id", contactsController.getContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: creates a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       201:
 *         description: contact created
 */
router.post("/", contactsController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: updates a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *     responses:
 *       200:
 *         description: contact updated
 */
router.put("/:id", contactsController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: deletes a contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: contact deleted
 */
router.delete("/:id", contactsController.deleteContact);

module.exports = router;