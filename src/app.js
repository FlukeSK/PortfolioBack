require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/auth-route");

const lateLimit = require("./middleware/rate-limit");
const notFound = require("./middleware/notfound");
const error = require("./middleware/error");
const { getPrismaClient } = require("@prisma/client/runtime/library");

const app = express();

app.use(lateLimit);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", authRoute);
// app.use("/queue", queueRoute);

app.use(notFound);
app.use(error);

const PORT = process.env.PORT || 8200;
app.listen(PORT, () => console.log("server running on port ", PORT));
