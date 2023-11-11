const path = require("path");
const Banner = require("./../models/Banner");
const { validationResult } = require("express-validator");
const deleteFile = require("./../utils/deleteFile");

exports.getAddBanner = (req, res, next) => {
  return res.render("banner/addbanner", {
    possibleErrors: { title: "", description: "" },
    pageName: "Add banner",
  });
};
exports.postAddBanner = (req, res, next) => {
  const possibleErrors = { title: "", description: "" };
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    Banner.create({
      title: req.body.title,
      description: req.body.description,
      imageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.file.filename
      ),
    })
      .then(() => {
        return res.render("banner/addbanner", { possibleErrors });
      })
      .catch((error) => {
        console.log(error);
        res.send("error occured");
      });
  } else {
    errors = errors.errors;
    errors.forEach((e) => {
      possibleErrors[e.path] = e.msg;
    });
    res.render("banner/addbanner", { possibleErrors });
  }
};

exports.getEditBanner = (req, res, next) => {
  const id = req.params.id;
  Banner.findByPk(id)
    .then((banner) => {
      res.render("banner/editbanner", {
        banner,
        possibleErrors: { title: "", description: "" },
      });
    })
    .catch(() => res.send("Some error occured"));
};
exports.postEditBanner = async (req, res, next) => {
  const banner = await Banner.findByPk(req.body.id);
  if (banner) {
    const imageURL = banner.imageUrl;
    banner.title = req.body.title;
    banner.description = req.body.description;
    banner.imageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.file.filename
    );
    return banner
      .save()
      .then(() => {
        deleteFile(imageURL);
        return res.redirect("/banners");
      })
      .catch(() => {
        res.send("some error occured");
      });
  }

  res.send("This product doesn't exists");
};

exports.getDeleteBanner = async (req, res, next) => {
  const id = req.params.id;
  Banner.findByPk(id).then((banner) => {
    const imageURL = banner.imageUrl;
    Banner.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        console.log(imageURL);
        deleteFile(imageURL);
        res.redirect("/banners");
      })
      .catch(() => res.status(400).send("failed"));
  });
};

exports.getAllBanner = async (req, res, next) => {
  const banners = await Banner.findAll();
  res.render("banner/displaybanner", { banners });
};
