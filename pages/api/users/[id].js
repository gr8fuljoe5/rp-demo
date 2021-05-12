import data from "../../../json/users_static.json";

export default (req, res) => {
  const { id } = req.query;
  if (data[id - 1]) {
    res.statusCode = 200;
    res.json(data[id - 1]);
  } else {
    res.statusCode = 500;
    res.json({ error: "User Not found" });
  }
};
