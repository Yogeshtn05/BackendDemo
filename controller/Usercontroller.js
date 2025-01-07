import User from '../Model/Usermodel.js';

// Fetch all users
export const fetch = async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users from the database
    console.log("Fetched users:", users); // Debug: Log users fetched from DB

    if (users && users.length > 0) {
      return res.status(200).json({ users }); // Respond with users
    } else {
      return res.status(404).json({ message: "No users found" }); // 404 for no users
    }
  } catch (error) {
    console.error("Error in fetch API:", error.message); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" }); // 500 for server errors
  }
};

// Check if a user exists (find by email)
export const check = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user by ID
export const deleteid = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user) {
      await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
export const update = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, address }, { new: true });
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const addUser = async (req, res) => {
    try {
        // Creating a new instance of the User model with the data from the request body
        const userdata = new User(req.body);
        const { email } = userdata;

        // Check if a user with the same email already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // If the user doesn't exist, save the new user data
        const savedUser = await userdata.save();
        res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (error) {
        // Handling errors that may occur during the operation
        res.status(500).json({ message: error.message });
    }
};
