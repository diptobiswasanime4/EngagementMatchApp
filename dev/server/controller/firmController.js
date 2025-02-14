import Engagement from "../model/Engagement.js";

export async function addEngagement(req, res) {
  const data = req.body;
  console.log(req.body);

  const newEngagement = new Engagement({
    ...data,
  });

  await newEngagement.save();

  res.json({
    newEngagement,
    msg: "Engagement data added successfully",
    success: true,
  });
}

export async function getEngagements(req, res) {
  const email = req.query.email;

  const Engagements = await Engagement.find({ postedBy: email });

  res.json({
    msg: "Engagements sent",
    engagements: Engagements,
    success: true,
  });
}
