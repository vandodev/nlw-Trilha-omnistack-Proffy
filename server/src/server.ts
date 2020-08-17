import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) =>{
    const users = [
        {nome:'Evandro', age: 36},
        {nome:'Israel', age: 12},
        {nome:'Carol', age: 32}
    ];
    
    return response.send(users);
});

app.listen(3333);