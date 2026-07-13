import { Router } from 'express';

export const usersRouter = Router();

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'user' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'user' },
];

usersRouter.get('/', (req, res) => {
  res.json(users);
});

usersRouter.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

usersRouter.post('/', (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'name and email required' });
  const newUser = { id: users.length + 1, name, email, role: role || 'user' };
  users.push(newUser);
  res.status(201).json(newUser);
});
