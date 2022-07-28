export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //   return await addIncident(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else if (req.method === "GET") {
    try {
      return await getIncidentById(req, res);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ msg: "Method not allowed" });
  }
}

//-------GET THE INCIDENTS DATA FROM DB-------//
const getIncidentById = async (req, res) => {
  const { id } = req.query;
  try {
    const incidents = await prisma.user.findMany({
      where: {
        id: id,
      },
      include: {
        incidents: true, // All posts where authorId == 20
      },
    });
    return res
      .status(200)
      .json({ incidents, success: "Successfully get the data for that ID" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Something went wrong" });
  }
};
