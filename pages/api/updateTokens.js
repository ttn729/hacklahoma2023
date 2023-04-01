import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("userTokens");

       const updatedTokens = await db
           .collection("tokens")
           .insertOne(req.body)

       res.json(updatedTokens);
   } catch (e) {
       console.error(e);
   }
};