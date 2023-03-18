import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRouter from "./routes/auth.js";
import { registerUser } from "./controller/auth.js";
import usersRouter from "./routes/users.js";
import postRouter from "./routes/post.js";
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controller/post.js";

/* Configuration */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// helmet is to secure the express app
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// morgan is a HTTP logger middleware
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* File Storage */
// everytime somone uploads a file is going to go in this destination with this file name
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cd(null, file.originalname);
  },
});
const upload = multer({ storage });

/* Mongoose set up */

const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Started At ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`${error} in the start`);
  });

//Routes
app.post("/auth/register", upload.single("picture"), registerUser);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postRouter);
