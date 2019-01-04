const express = require('express');
const app = express();

const models = require('./models');

models.user.create({firstName: 'Lauren', lastName: 'Reilly', email: 'heygirl@gmail.com'});

app.get('/', function(req, res){
    models.user.findAll()
    .then((results) => {
        results.forEach(function(index){
            console.log(index.id, index.firstName);
        });
    });
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});