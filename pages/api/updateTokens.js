import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("userTokens");

    let updateField = {};
    if (req.body.tokens) {
      updateField = { tokens: req.body.tokens };
    } else if (req.body.name) {
      updateField = { name: req.body.name };
    } else {
      throw new Error("Invalid request body");
    }

    const updatedUser = await db
      .collection("tokens")
      .updateOne({ email: req.body.email }, { $set: updateField });

    res.json(updatedUser);
  } catch (e) {
    console.error(e);
  }
};
