import express from "express";
import cors from "cors";

import UserRoute from "./routes/UserRoute.js";

const PORT = process.env.PORT || 3080;
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute)

app.listen(PORT, () => console.log(`Server up and running in port ${PORT} `));