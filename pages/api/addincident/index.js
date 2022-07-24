import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      return await addIncident(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "GET") {
    try {
      return await getIncident(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

//-------GET THE INCIDENTS DATA FROM DB-------//
const getIncident = async (req, res) => {
  try {
    const incidents = await prisma.incident.findMany({});
    return res
      .status(200)
      .json({ incidents, success: "Successfully get the data" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};

//--------ADD DATA TO TH DB OF INCIDENTS DETAILS--------//
const addIncident = async (req, res) => {
  try {
    const { event, yearsAgo, country, author, authorId } = req.body;
    const data = await prisma.incident.create({
      data: {
        event,
        yearsAgo,
        country,
        author,
        authorId,
      },
    });
    return res.status(200).json({ data, msg: "Incident added succesfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
