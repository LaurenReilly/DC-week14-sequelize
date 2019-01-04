const express = require('express');
const app = express();

const prompt = require('prompt-promise');

const models = require('./models');

let newUser = {firstName: '', lastName: '', email: ''};

// models.user.create({firstName: 'Lauren', lastName: 'Reilly', email: 'heygirl@gmail.com'});

// app.get('/', function(req, res){
//     models.user.findAll()
//     .then((results) => {
//         results.forEach(function(index){
//             console.log(index.id, index.firstName);
//         });
//     });
// });

function addUser(){ 
    prompt('First Name: ')
    .then(function (val) {
    newUser.firstName = val;
    prompt('Last Name: ')
    .then(function(val){
        newUser.lastName = val;
        prompt('Email: ')
        .then(function(val){
            newUser.email = val;
            models.user.create(newUser)
            models.user.findOne({where: {lastName: newUser.lastName}})
            .then((results) => {
                var r = results.dataValues
                console.log('Created User with Id of: ', r.id);
                prompt('Enter Another User? Enter Y/N\n')
                .then(function(val){
                    var answer = val;
                    if (answer == "y" || answer == "Y") {
                        addAlbum();
                    } else {
                        console.log("Ok...goodbye then")
                        prompt.done();
                    }
                });
            });
        });
    });
})
    .catch(function rejected(err) {
    console.log('error:', err.stack);
    pgp.end();
    prompt.finish();
    });
}

addUser();



app.listen(3000, function(){
});