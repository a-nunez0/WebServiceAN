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

module.exports = {
  getAllContacts,
  getContactById,
};
