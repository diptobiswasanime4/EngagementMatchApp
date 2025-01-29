import User from "../model/User.js";

export async function addEngagement(req, res) {
  const { email, ...data } = req.body;
  console.log(req.body);

  const userDoc = await User.findOneAndUpdate(
    { email },
    { $set: data },
    { new: true }
  );

  res.json({
    msg: "Engagement data added successfully",
    success: true,
  });
}
