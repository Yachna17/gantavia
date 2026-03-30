import Destination from "../models/Destination.js";

export const getAll = async (req, res) => {
  const data = await Destination.find();
  res.json(data);
};

export const getOne = async (req, res) => {
  const data = await Destination.findById(req.params.id);
  res.json(data);
};