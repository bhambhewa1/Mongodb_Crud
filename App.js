const express = require('express')
const connectDB = require('./src/Mongoose/index')
const web = require('./src/routes/index')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

// Defining app, dburl and port number
const app = express();
const DB_Url = process.env.DB_Url || "mongodb://localhost:27017";
const port = 3000; 


// Connection with db
connectDB(DB_Url);

app.use(cors());              // froentend and backend run on different localhost, so making their origin same
app.use(bodyParser.json())    // req.body data is undefined, so getting json data in json format on backend
app.use(fileUpload({          // uploading file on our local of backend
    useTempFiles: true,
    tempFileDir: "/uploads"
}))

// Load routing
app.use('/',web);

app.listen(port,() => {
    console.log(`Server listen at ${port} port`);
});



// {200: success}  {401: token expire}  {403: bad request(expire otp)}  {409: duplicate record} 
// {500: unknown error occured}