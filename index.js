const express = require('express');


const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))





const routes = require('./routes');

app.use(express.json());

app.use(express.static('public'));

app.use('/', routes);



// app.get('/users', (req, res) => {
//   res.json(user);
// });

// app.get('/users/:id', (req, res) => {
//   const userId = parseInt(req.params.id);
//   const selectedUser = user.find(u => u.id === userId);

//   if (selectedUser) {
//     res.json(selectedUser);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });


app.listen(port, () => {
  console.log('app is listening on:', port)
})




