const mongoose = require("mongoose");

const connectionString = `mongodb+srv://christian:chrisopendb@cluster0.aqfkfm1.mongodb.net/taskManagerDb?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the DB..."))
  .catch((err) => console.log(err));
