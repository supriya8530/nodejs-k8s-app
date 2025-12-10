const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node.js app running in Kubernetes!");
});

// health endpoint for kube probes
app.get("/health", (req, res) => res.send("ok"));

app.listen(3000, () => console.log("App running on 3000"));
