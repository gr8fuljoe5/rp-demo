import data from "../../../json/users_2.json";

export default (req, res) => {
  const { id } = req.query;
  res.statusCode = 200;
  res.json(data[id - 1]);
};
