const { GifCard } = require('../models/models');
const AWS = require('aws-sdk');

const credentials = new AWS.Credentials({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
AWS.config.credentials = credentials;

const s3 = new AWS.S3();

class GifCardController {
  async create(req, res) {
    try {
      const { id } = req.user;
      const { name, category } = req.body;
      if (!name || !category) {
        return res.status(400).json({ error: error.message });
      }

      const fileContent = Buffer.from(req.files.file.data, 'binary');
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: req.files.file.name.replace('.gif', `_${id}.gif`),
        Body: fileContent,
      };
      s3.upload(params, async function (err, data) {
        if (err) {
          console.log(err);
          return {
            message: 'Problems with uploading',
          };
        }
        const gifcard = await GifCard.create({
          name,
          category,
          userId: id,
          url: data.Location,
        });
        return res.status(200).json(gifcard);
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const { id } = req.user;
      const gifcards = await GifCard.findAll({ where: { userId: id } });
      if (!gifcards) {
        return res.status(400).json({ error: error.message });
      }
      return res.json(gifcards);
    } catch (error) {}
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const gifcard = await GifCard.findByPk(id);
      if (!gifcard) {
        return res.status(404).json({ message: 'Card wasnt found ' });
      }
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `${gifcard.url.replace(
          'https://gifcloud-bucket.s3.amazonaws.com/',
          ''
        )}`,
      };
      s3.deleteObject(params, async function (err, data) {
        if (err) return res.status(500).json({ error: err.message });
        else {
          await GifCard.destroy({ where: { id } });
          return res.status(204).json();
        }
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new GifCardController();
