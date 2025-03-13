const express = require('express')
const cors = require('cors')
const app = express()

//. Custom CORS
const corsOptions = {
    origin:'http;//abc.com',
    methods:'GET,POST',  // Allows only GET,POST requests
    allowedHeaders:['Content-Type','Authorization'],  // Allows specific headers
    optionsSuccessStatus:204
}

app.use(cors(corsOptions))     // use CORS middleware
app.options('*', cors(corsOptions))   // Handle preFlight requests

//Defn Routes
app.get('/',(req,res)=>{
    res.send('CORS is enabled');
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

