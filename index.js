import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import classifyNumberRoutes from "./routes/classifyNumberRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", classifyNumberRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

