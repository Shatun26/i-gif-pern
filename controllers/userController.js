const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, firstname, lastname) => {
  return jwt.sign({ id, email, firstname, lastname }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req, res) {
    const { email, password, firstname, lastname } = req.body;
    if (!email || !password || !firstname || !lastname) {
      return res.status(400).json({ message: 'Incorrect data' });
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.status(400).json({ message: 'User is already exist' });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      password: hashPassword,
      firstname,
      lastname,
    });
    const token = generateJwt(
      user.id,
      user.email,
      user.firstname,
      user.lastname
    );
    return res.status(203).json({ token });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User wasnt found' });
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({ message: 'Wrong password entered' });
    }
    const token = generateJwt(
      user.id,
      user.email,
      user.firstname,
      user.lastname
    );
    return res.status(200).json(token);
  }
  async check(req, res) {
    const token = generateJwt(
      req.user.id,
      req.user.email,
      req.user.firstname,
      req.user.lastname
    );
    return res.json({token});
  }
}
module.exports = new UserController();
