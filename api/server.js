import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { usersRouter } from './routes/users.js';
import { tasksRouter } from './routes/tasks.js';
import { healthRouter } from './routes/health.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const app = express();
const PORT = 4567;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/members', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/health', healthRouter);

// 404 for unmatched API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

// Serve static frontend
app.use(express.static(rootDir));

// SPA fallback
app.get('/{*splat}', (req, res) => {
  res.sendFile('index.html', { root: rootDir });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test App running on http://0.0.0.0:${PORT}`);
});
