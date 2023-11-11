const express = require("express");
// const path = require("path");
// const multer = require("multer");
// const session = require("express-session");
// const crypto = require("crypto");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/Auth");
// const blogRoutes = require("./routes/Blog");
// const blogApiRoutes = require("./routes/BlogApi");
// const serviceRoutes = require("./routes/Service");
// const serviceApiRoutes = require("./routes/ServiceApi");
// const userRoutes = require("./routes/User");
// const clienteleRoutes = require("./routes/Clientele");
// const clienteleApiRoutes = require("./routes/ClienteleApi");
// const bannerRoutes = require("./routes/Banner");
// const bannerApiRoutes = require("./routes/BannerApi");
// const miscRoutes = require("./routes/Misc");
// const miscApiRoutes = require("./routes/MiscApi");

// const corsOptions = {
//   origin: [process.env.ORIGIN, process.env.ORIGIN2],
//   optionsSuccessStatus: 200,
// };
const app = express();
// app.use(cors(corsOptions));
// app.use(
//   session({
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));
// app.use("/public", express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "public")));

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "public/images");
//     },
//     filename: (req, file, cb) => {
//       cb(null, crypto.randomUUID() + file.originalname);
//     },
//   }),
// });
// app.use("/api/blogs", blogApiRoutes);
// app.use("/api/miscs", miscApiRoutes);
// app.use("/api/services", serviceApiRoutes);
// app.use("/api/clientele", clienteleApiRoutes);
// app.use("/api/banner", bannerApiRoutes);
// app.use("/auth", authRoutes);
// app.use((req, res, next) => {
//   if (req.url != undefined && req.url !== "/favicon.ico")
//     req.session.currentUrl = req.url;
//   if (!req.session.isLoggedIn) {
//     return res.render("auth/login", { error: false });
//   }
//   next();
// });
// app.use("/clientele", upload.single("imageUrl"), clienteleRoutes);
// app.use("/users", userRoutes);
// app.use("/blogs", upload.single("imageUrl"), blogRoutes);
// app.use(
//   "/miscs",
//   upload.fields([
//     {
//       name: "miscImageUrl",
//     },
//     {
//       name: "aboutBannerImageUrl",
//     },
//     {
//       name: "serviceListBannerImageUrl",
//     },
//     {
//       name: "serviceDetailsBannerImageUrl",
//     },
//     {
//       name: "blogListBannerImageUrl",
//     },
//     {
//       name: "contactUsBannerImageUrl",
//     },
//   ]),
//   miscRoutes
// );
// app.use("/services", upload.single("imageUrl"), serviceRoutes);
// app.use("/banners", upload.single("imageUrl"), bannerRoutes);
// app.get(["/dashboard", "/"], (req, res, next) => {
//   res.render("dashboard");
// });
app.use("/", (req, res, next) => {
  res.status(400).end("This page doesn't exist");
});

app.listen(process.env.PORT, () => {
  console.log("server started with" + process.env.PORT);
});
