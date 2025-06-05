import dotenv from "dotenv"
import connectDB from "./src/DB/index.js"
import { app } from "./app.js"
dotenv.config({
    path: './env'
})

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is live" });
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running  on ${process.env.PORT}`)
        })
    })
    .catch(() => {
        console.log("Server failed");
    })