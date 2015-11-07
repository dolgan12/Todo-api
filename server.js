var express = require('express');
var app = express();

var PORT = process.env.PORT || 2000;

var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    compleated: false
},{
    id: 2,
    description: 'Go to market',
    compleated: false
},{
    id: 3,
    description: 'Feed the cat',
    compleated: true
}];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

app.get('/todos', function(req, res) {
    res.json(todos);
});

app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matched;
    
    todos.forEach(function (todo){
        if(todoId === todo.id){
            matched = todo;
        }
    })
    if(matched){
        res.json(matched);
    }else {        
        res.status(404).send();
    }
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT);
});