const express = require("express");
const cors = require("cors");
const chatbotData = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/chatbot/:id", (req, res) => {
  const id = req.params.id;
  res.json(chatbotData[id]);
});

app.listen(5000, () => {
  console.log("Chatbot server running on port 5000");
});
