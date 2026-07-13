import { Router } from 'express';

export const tasksRouter = Router();

const tasks = [
  { id: 1, title: 'Setup CI/CD pipeline', status: 'done', assignee: 'Alice' },
  { id: 2, title: 'Write API documentation', status: 'in_progress', assignee: 'Bob' },
  { id: 3, title: 'Fix login bug', status: 'todo', assignee: 'Charlie' },
  { id: 4, title: 'Deploy to staging', status: 'todo', assignee: 'Alice' },
];

tasksRouter.get('/', (req, res) => {
  res.json(tasks);
});

tasksRouter.post('/', (req, res) => {
  const { title, assignee } = req.body;
  if (!title) return res.status(400).json({ error: 'title required' });
  const newTask = { id: tasks.length + 1, title, status: 'todo', assignee: assignee || 'Unassigned' };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

tasksRouter.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  Object.assign(task, req.body);
  res.json(task);
});
