const User = require('../models/users');

const searchFriend = async (req, res) => {
  try {
    const { q } = req.query;
    console.log("✅ Backend route hit with query:", q);

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    console.log("🔍 Searching in MongoDB...");
    const foundUsers = await User.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
      ],
    }).select("name email profileImage");

    console.log("✅ Found users:", foundUsers);

    return res.status(200).json(foundUsers);
  } catch (error) {
    console.error("❌ Search error:", error.message);
    console.error(error.stack);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = searchFriend;
