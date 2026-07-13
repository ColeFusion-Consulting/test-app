import express from 'express';
import cors from 'cors';
import { usersRouter } from './routes/users.js';
import { tasksRouter } from './routes/tasks.js';
import { healthRouter } from './routes/health.js';

const app = express();
const PORT = 4567;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/members', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/health', healthRouter);

// Serve static frontend
app.use(express.static('.'));

// SPA fallback
app.get('/{*splat}', (req, res) => {
  res.sendFile('index.html', { root: '.' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test App running on http://0.0.0.0:${PORT}`);
});
