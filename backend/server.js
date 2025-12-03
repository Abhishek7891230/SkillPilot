import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.post("/run", async (req, res) => {
  const { language, code, input } = req.body;

  try {
    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language,
        version: "*",
        files: [{ content: code }],
        stdin: input,
      }
    );

    const run = response.data.run;

    res.json({
      stdout: run.stdout,
      stderr: run.stderr,
      output: run.output,
    });
  } catch (err) {
    console.error("Execution error:", err.message);
    res.status(500).json({
      error: "Execution failed",
      details: err.message,
    });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
