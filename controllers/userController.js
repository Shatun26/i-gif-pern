const { User } = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail } = require('validator');

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
    } else if (password.length < 6) {
      return res.status(400).json({ message: 'Password too short!' });
    } else if (!isEmail(email)) {
      return res.status(400).json({ message: 'Email invalid' });
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(firstname)) {
      return res.status(400).json({
        message:
          'The first name must only contain letters and must not contain spaces.',
      });
    } else if (!/^[a-zA-Zа-яА-Я]+$/.test(lastname)) {
      return res.status(400).json({
        message:
          'The last name must only contain letters and must not contain spaces.',
      });
    } else if (password.includes(' ')) {
      return res
        .status(400)
        .json({ message: 'Password must not contain spaces' });
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
}
module.exports = new UserController();
