const Banner = require("./../models/Banner");

exports.getAllBanners = async (req, res, next) => {
  res.json(await Banner.findAll({ order: [["createdAt", "DESC"]], limit: 1 }));
};

exports.getBannerById = async (req, res, next) => {
  res.json(await Banner.findByPk(req.params.id));
};
