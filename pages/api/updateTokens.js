import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("userTokens");

    const updatedTokens = await db
      .collection("tokens")
      .updateOne(
        { email: req.body.email },
        { $set: { tokens: req.body.tokens } }
      );

    res.json(updatedTokens);
  } catch (e) {
    console.error(e);
  }
};
