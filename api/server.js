app.use('/api/tasks', tasksRouter);
app.use('/api/health', healthRouter);

app.use('/api/users', usersRouter); // Restore users route

// 404 for unmatched API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });