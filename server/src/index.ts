import app from "./app";


app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is up and running on ${process.env.PORT || 3001}`);
})