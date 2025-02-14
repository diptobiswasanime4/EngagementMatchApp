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
