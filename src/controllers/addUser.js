const firestore = require("../config/dbConnection");

async function addUser(req, res) {
  const { firstName, lastName, phone, email } = req.body;

  try {
    const addUser = {
      firstName,
      lastName,
      phone,
      email,
    };

    const result = await firestore.collection("users").add(addUser);

    if (result) {
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send({ message: "an error ocurred while adding new user" });
  }
}

module.exports = addUser;
