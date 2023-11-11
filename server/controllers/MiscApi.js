const Misc = require("./../models/Misc");

exports.getAllMiscs = async (req, res, next) => {
  res.json(await Misc.findAll({ order: [["createdAt", "DESC"]], limit: 8 }));
};

exports.getMiscById = async (req, res, next) => {
  res.json(await Misc.findByPk(req.params.id));
};