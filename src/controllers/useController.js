import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

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

export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User Not Found");
    handleResponse(res, 200, "User featched Successfully", user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updateUser = await updateUserService(req.params.id, name, email);
    if (!updateUser) return handleResponse(res, 404, "User not Found");
    handleResponse(res, 200, "User Update Successfully");
  } catch (error) {
    next(error);
  }
};

export const deleteuser = async (req, res, next) => {
  try {
    const deleteUser = await deleteUserService(req.params.id);
    if (!deleteUser) return handleResponse(res, 404, "User not Found");
    handleResponse(res, 200, "User Delete Successfully");
  } catch (error) {
    next(error);
  }
};
