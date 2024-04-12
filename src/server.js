import express from "express";

import appRoutes from "./routes.js"; // must be .js extension

const app = express();
const PORT = 3000;

app.use(express.json()); // for json format same as body-parser

app.use("/v1", appRoutes);

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
