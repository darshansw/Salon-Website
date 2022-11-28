const express =require ("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;


//EXPRESS 
app.use('/static', express.static('static')); // For serving static files
app.set(express.urlencoded());

//PUG
app.set('view engine', 'pug') //Set the templete engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory

//ENDPOINTS
app.get('/', (req,res)=> {
    const con = "This is the pug website"
    const params={'title': 'Salon website using pug', "content":con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})


//START SERVER
app.listen(port, ()=>{
    console.log(`The application started at port ${port}`);
});
