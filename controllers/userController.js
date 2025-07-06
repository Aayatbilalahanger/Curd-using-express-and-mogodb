const User = require("../models/User");

// Create user
exports.createuser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User({ name, email });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error in createuser:", err);
        res.status(500).send("failed to create user");
    }
};

// Show users
exports.getuser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (err) {
        console.error("Error in getuser:", err);
        res.status(500).send("failed to show user");
    }
};

// Delete user
exports.deleteuser = async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "user not found" });
        }
        res.status(200).json({ message: "user deleted successfully" });
    } catch (err) {
        console.error("Error in deleteuser:", err);
        res.status(500).json({ error: "something went wrong" });
    }
};

// Update user
exports.updateuser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const updateuser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true }
        );
        if (!updateuser) {
            return res.status(404).json({ message: "user not updated" });
        }
        res.status(200).json(updateuser);
    } catch (err) {
        console.error("Error in updateuser:", err);
        res.status(500).json({ error: "something went wrong" });
    }
};
