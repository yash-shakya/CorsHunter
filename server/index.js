import express from "express";
import dotenv from "dotenv";
import routes from "./router/routes.js"

dotenv.config();

// Initialize Express app
const app = express();

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGODB_HOST;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connection to MongoDB successful");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

// Start server and connect to database
const startServer = async () => {
    await connectDB();

    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });

    routes(app);
};

startServer();