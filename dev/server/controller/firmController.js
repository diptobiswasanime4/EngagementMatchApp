import Engagement from "../model/Engagement.js";

export async function addEngagement(req, res) {
  const { email, ...data } = req.body;
  console.log(req.body);

  const engagementDoc = await Engagement.findOneAndUpdate(
    { email },
    { $set: data },
    { new: true }
  );

  res.json({
    msg: "Engagement data added successfully",
    success: true,
  });
}
