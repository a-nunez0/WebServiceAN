const { ObjectId } = require("mongodb");
const { getDatabase } = require("../data/database");

const getAllContacts = async (req, res) => {
  const contacts = await getDatabase().collection("contacts").find().toArray();
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const contactId = req.params.id;

  const contact = await getDatabase()
    .collection("contacts")
    .findOne({ _id: new ObjectId(contactId) });

  res.json(contact);
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await getDatabase().collection("contacts").insertOne(contact);

  res.status(201).json(response.insertedId);
};

const updateContact = async (req, res) => {
  const contactId = req.params.id;

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  await getDatabase()
    .collection("contacts")
    .replaceOne({ _id: new ObjectId(contactId) }, contact);

  res.sendStatus(204);
};

const deleteContact = async (req, res) => {
  const contactId = req.params.id;

  await getDatabase()
    .collection("contacts")
    .deleteOne({ _id: new ObjectId(contactId) });

  res.sendStatus(200);
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};