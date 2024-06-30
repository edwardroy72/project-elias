import config from "./config.json" assert { type: "json" };
import express, { json } from "express";
import cors from "cors";
import errorHandler from "./middleware.ts";
import { getData, loadData } from "./datastore.ts";

const app = express();
app.use(json());
app.use(cors());
loadData();

const PORT = parseInt(process.env.PORT || config.port);
const HOST = process.env.IP || "localhost";

// API Endpoints
app.get("/photo", (req, res) => {
  const { uId, pId } = req.body;
  res.json(["photoo!!"]);
});

// Middleware must exist AFTER all API endpoints.
app.use(
  (
    err: { status: any; message: any },
    req: any,
    res: {
      status: (arg0: any) => void;
      send: (arg0: { error: { status: any; message: any } }) => void;
    },
    next: any
  ) => {
    // Render the error page
    res.status(err.status || 500);
    res.send({
      error: {
        status: err.status || 500,
        message: err.message,
      },
    });
  }
);

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server started at http://${HOST}:${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Shutting down server gracefully."));
});
