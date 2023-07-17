const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let posts = [
  {
    views: 0,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    views: 0,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    views: 0,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
  {
    views: 0,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
  {
    views: 0,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
  },
  {
    views: 0,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
  },
];

const user = 'Elijah';
app.get('/user', async (req, res) => {
  res.send({ username: user });
});

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.get('/api/post', (req, res) => {
  res.send(posts[2]);
});

app.put('/api/post', (req, res) => {
  posts[2].views += 1;
  res.send('updated');
});

// special for remote updating
app.put('/api/post/remote', (req, res) => {
  posts[2].views += 1;
  res.send(posts[2]);
});

app.post('/api/post/new', (req, res) => {
  console.log(req.body);
  const { title, id, body } = req.body;

  const newPost = { title, id, body };
  posts.push(newPost);
  res.send(newPost);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running on port ' + PORT));
