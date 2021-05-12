import { USERS } from "../../../contants/endpoints";

export default async function (req, res) {
  const response = await fetch(USERS);
  const json = await response.json();
  const { id } = req.query;
  if (json[id - 1]) {
    res.statusCode = 200;
    res.json(json[id - 1]);
  } else {
    res.statusCode = 404;
    res.json({ error: "User Not found" });
  }
}
