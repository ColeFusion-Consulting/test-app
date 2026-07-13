import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      tasks: '/api/tasks',
      taskStats: '/api/tasks/stats',
    },
  });
});
