const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: false },
  lastname: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
});
const GifCard = sequelize.define('gifcard', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      'https://psv4.userapi.com/c520036/u2000024904/docs/d19/9c76750ce5a5/file.gif?extra=zv-QLOVxcIfNHNePscrOBFFIKSKcVBteKDHYKbRoR83oSrcvxriA_6qVU5hHxSYvQ1dba9sAPxjd68vMYvjpvns_l5Z-QQ6RiUpFtfL7rbnFlRnWumfCJpZgm8n7TaRKSovcxGkIAYygbSadJ3pm-JKj',
  },
});

User.hasMany(GifCard);
GifCard.belongsTo(User);

module.exports = {
  User,
  GifCard,
};
