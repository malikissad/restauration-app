const bcrypt = require("bcrypt");
async function CheckInfoLogin(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json("email ou password est vide");
    }
    //récupérer le password de l'utilisateur
    const UserPassword = await Users.findOne({
      where: { username: username },
      attributes: ["password"],
    });
    if (!UserPassword) {
      return res.status(401).json("user n'existe pas");
    }
    //verifier le password
    const CheckPassword = await bcrypt.compare(password, UserPassword.password);
    if (!CheckPassword) {
      return res.status(400).json("password incorrect");
    }
    res.locals.username = username;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { CheckInfoLogin };
