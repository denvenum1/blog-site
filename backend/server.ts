import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
