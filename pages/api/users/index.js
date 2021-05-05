import data from "../../../json/users_static.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json(data);
};
