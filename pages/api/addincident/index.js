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
    const incidents = await prisma.incident.findMany({
      include: {
        user: true,
      },
    });
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
    const { event, yearsAgo, country, authorId } = req.body;
    const incident = await prisma.incident.create({
      data: {
        event,
        yearsAgo,
        country,
        authorId,
      },
    });
    return res
      .status(200)
      .json({ incident, msg: "Incident added succesfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
