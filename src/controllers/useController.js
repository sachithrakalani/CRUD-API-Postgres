import { createUserService, getAllUsersService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User Created Successfuly", newUser);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await getAllUsersService();
    handleResponse(res, 200, "User featched Successfully");
  } catch (error) {
    next(error);
  }
};
