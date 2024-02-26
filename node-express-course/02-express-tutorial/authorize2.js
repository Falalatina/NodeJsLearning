const auth2 = (req, res, next) => {
  const { user } = req.query;

  if (user === "karas") {
    req.user = { name: "karas" };
    next();
  } else {
    res.status(401).send("Nope :(");
  }
};

module.exports = auth2;
