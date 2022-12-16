const mongoose = require("mongoose");
const pass = "Sv9A9h6bxVolTYq4";
const user = "login";
const dbName = "LoginDB";
const DB_URI = `mongodb+srv://${user}:${pass}@cluster0.gfac6fk.mongodb.net/${dbName}?retryWrites=true&w=majority`
// `mongodb+srv://${pass}:${user}@cluster0.gfac6fk.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const db = async () => {
  await mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((e) => console.log(e));
};
mongoose.set("strictQuery", false);

module.exports = db;
