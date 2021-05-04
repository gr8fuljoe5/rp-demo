const data = [
  {
    id: 1,
    name: "Joe K",
    title: "Dev",
    description:
      "Mineral is not boundless in over there, the kingdom, or wonderland, but everywhere.",
  },
  {
    id: 2,
    name: "Matt",
    title: "Solutions Arch",
    description:
      "Cauliflower can be rinseed with juicy chicory, also try covering the punch with ketchup.",
  },
  {
    id: 3,
    name: "JJ",
    title: "Director",
    description: "Where is the scrawny codfish?",
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(data);
};
