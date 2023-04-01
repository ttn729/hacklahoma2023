import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("userTokens");

       const userTokens = await db
           .collection("tokens")
           .find({}).limit(10).sort({tokens: -1})
           .toArray();

       res.json(userTokens);
   } catch (e) {
       console.error(e);
   }
};