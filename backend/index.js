// backend/index.js
const express = require("express");
const rootRouter = require("./routes/index");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());




const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
}


app.use("/api/v1", rootRouter);
app.get('/', (req, res) => {
    res.send("GET Request Called")
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})