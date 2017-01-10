var Todos = require('../models/todoModel');

module.exports = function(app) {
  app.get('/api/setupTodos', function(req, res) {
    var starterTodos = [
      {
        username: 'test',
        todo: 'buy milk',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'phone doctor',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'apply for job',
        isDone: false,
        hasAttachment: false
      }
    ];
    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
}
