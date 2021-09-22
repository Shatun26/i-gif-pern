const { GifCard } = require('../models/models');
class GifCardController {
  async create(req, res) {
    try {
      const { name, category } = req.body;
      if (!name || !category) {
        return res.status(400).json({ error: error.message });
      }
      const gifcard = await GifCard.create({ name, category });
      return res.status(200).json(gifcard);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const gifcards = await GifCard.findAll();
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
      await GifCard.destroy({ where: { id } });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new GifCardController();
