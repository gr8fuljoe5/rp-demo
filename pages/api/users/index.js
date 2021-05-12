import { USERS } from "../../../contants/endpoints";

export default async function (req, res) {
  const response = await fetch(USERS);
  const json = await response.json();
  res.statusCode = 200;
  res.json(json);
}
