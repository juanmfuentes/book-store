import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, MONGO_URI, FRONTEND_URL } from "./config.js";
import bookRoutes from './routes/bookRoute.js';

const app = express();

// CORS
const corsOptions = {
    origin: FRONTEND_URL,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

// Middlewares
app.use(express.json());

// Connection to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection error:", err));

// Routes
app.get("/", (req, res) => {
    res.send("API working correctly :)");
});

app.use("/books", bookRoutes);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
