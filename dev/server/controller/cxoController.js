import User from "../model/User.js";

export async function updateCXO(req, res) {
  const { email, ...data } = req.body;
  console.log(req.body);

  const userDoc = await User.findOneAndUpdate(
    { email },
    { $set: data },
    { new: true }
  );

  res.json({
    msg: "User data updated successfully",
    success: true,
  });
}
