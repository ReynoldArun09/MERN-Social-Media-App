import app from "./app";
import MongoConnection from "./database/MongoConnection";

MongoConnection()
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is up and running on ${process.env.PORT || 3001}`);
})