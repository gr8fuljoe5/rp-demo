import data from "../../../json/users_2.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json(data);
};
