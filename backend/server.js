import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import empRoutes from "./routers/EmpRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", empRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
