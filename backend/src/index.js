const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect(
  "mongodb+srv://userpi:pwdpi@cluster0-ycy8l.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
