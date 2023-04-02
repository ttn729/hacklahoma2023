import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("userTokens");

       const userTokens = await db
           .collection("tokens")
           .findOne({email: req.body.email})

       res.json(userTokens);
   } catch (e) {
       console.error(e);
   }
};