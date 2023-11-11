const path = require("path");
const { validationResult } = require("express-validator");
const Misc = require("./../models/Misc");
const deleteFile = require("./../utils/deleteFile");

exports.getAddMisc = (req, res, next) => {
  return res.render("misc/addmisc", {
    possibleErrors: { title: "", description: "" },
    pageName: "Add Misc",
  });
};
exports.postAddMisc = (req, res, next) => {
  const possibleErrors = { title: "", description: "" };
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    Misc.create({
      title: req.body.title,
      description: req.body.description,
      miscImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["miscImageUrl"][0].filename
      ),
      aboutBannerImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["aboutBannerImageUrl"][0].filename
      ),
      serviceListBannerImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["serviceListBannerImageUrl"][0].filename
      ),
      serviceDetailsBannerImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["serviceDetailsBannerImageUrl"][0].filename
      ),
      blogListBannerImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["blogListBannerImageUrl"][0].filename
      ),
      contactUsBannerImageUrl: path.join(
        process.env.DOMAIN_PATH,
        "public",
        "images",
        req.files["contactUsBannerImageUrl"][0].filename
      ),
    })
      .then(() => {
        return res.render("misc/addmisc", { possibleErrors });
      })
      .catch(() => res.send("error occured"));
  } else {
    errors = errors.errors;
    errors.forEach((e) => {
      possibleErrors[e.path] = e.msg;
    });
    res.render("misc/addmisc", { possibleErrors });
  }
};

exports.getEditMisc = (req, res, next) => {
  const id = req.params.id;
  Misc.findByPk(id)
    .then((misc) => {
      res.render("misc/editmisc", {
        misc,
        possibleErrors: { title: "", description: "" },
      });
    })
    .catch(() => res.send("Some error occured"));
};
exports.postEditMisc = async (req, res, next) => {
  const misc = await Misc.findByPk(req.body.id);
  if (misc) {
    const miscImageURL = misc.miscImageUrl;
    const aboutBannerImageUrl = misc.aboutBannerImageUrl;
    const serviceListBannerImageUrl = misc.serviceListBannerImageUrl;
    const serviceDetailsBannerImageUrl = misc.serviceDetailsBannerImageUrl;
    const blogListBannerImageUrl = misc.blogListBannerImageUrl;
    const contactUsBannerImageUrl = misc.contactUsBannerImageUrl;

    misc.title = req.body.title;
    misc.description = req.body.description;

    misc.miscImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["miscImageUrl"][0].filename
    );
    misc.aboutBannerImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["aboutBannerImageUrl"][0].filename
    );
    misc.serviceListBannerImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["serviceListBannerImageUrl"][0].filename
    );
    misc.serviceDetailsBannerImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["serviceDetailsBannerImageUrl"][0].filename
    );
    misc.blogListBannerImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["blogListBannerImageUrl"][0].filename
    );
    misc.contactUsBannerImageUrl = path.join(
      process.env.DOMAIN_PATH,
      "public",
      "images",
      req.files["contactUsBannerImageUrl"][0].filename
    );
    return misc
      .save()
      .then(() => {
        deleteFile(miscImageURL);
        deleteFile(aboutBannerImageUrl);
        deleteFile(serviceListBannerImageUrl);
        deleteFile(serviceDetailsBannerImageUrl);
        deleteFile(blogListBannerImageUrl);
        deleteFile(contactUsBannerImageUrl);

        return res.redirect("/miscs");
      })
      .catch(() => {
        res.send("some error occured");
      });
  }

  res.send("This product doesn't exists");
};

exports.getDeleteMisc = async (req, res, next) => {
  const id = req.params.id;
  Misc.findByPk(id).then((misc) => {
    const miscImageURL = [
      misc.miscImageUrl,
      misc.aboutBannerImageUrl,
      misc.serviceListBannerImageUrl,
      misc.serviceDetailsBannerImageUrl,
      misc.blogListBannerImageUrl,
      misc.contactUsBannerImageUrl,
    ];
    Misc.destroy({
      where: {
        id,
      },
    })
      .then(() => {
        for (let i = 0; i < miscImageURL.length; i++) {
          deleteFile(miscImageURL[i]);
        }
        res.redirect("/miscs");
      })
      .catch(() => res.status(400).send("failed"));
  });
};

exports.getAllMisc = async (req, res, next) => {
  const miscs = await Misc.findAll();
  res.render("misc/displaymisc", { miscs });
};
