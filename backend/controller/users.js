import User from "../models/User.js";

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({
      location: error.location,
      message: error.message,
    });
  }
};

export const getUserFriends = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, university, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          university,
          picturePath,
        };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(400).json({
      location: error.location,
      message: error.message,
    });
  }
};

export const addRemoveFriend = async (req, res) => {
  const { id, friendId } = req.params;
  try {
    const user = await User.findById(id);
    const friend = await User.findById(friendId);
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== id);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, university, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          university,
          picturePath,
        };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(400).json({
      location: error.location,
      message: error.message,
    });
  }
};
