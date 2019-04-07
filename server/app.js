const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;

//allow cross origin request
app.use(cors());

// connect to database
mongoose.connect('mongodb+srv://shakti:Decoder35@cluster0-em4nn.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    //schema for graphql
    schema,
    graphiql: true
}));

app.listen(PORT, ()=> {
    console.log(`Server is running at port ${PORT}`);
});