const Admin = require('../models/Admin');

module.exports = {
  async findAll(req, res) {
    try {
      const admins = await Admin.findAll();

      return res.json(admins);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async authenticateAdmin(req, res) {
    try {
      const admins = await Admin.findAll(req.body);
      const { email, password } = req.body;

      const admin = admins.find(u => {
        return u.email === email && u.password === password
      });

      if (!admin) {
        throw new Error('E-mail ou senha incorretos');
      }

      return res.json({
        admin,
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async createAdmin(req, res) {
    try {
      const admin = await Admin.create(req.body);

      return res.json(admin);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroyAdmin(req, res) {
    try {
      const admin = await Admin.findByPk(req.params.id);
      await admin.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
