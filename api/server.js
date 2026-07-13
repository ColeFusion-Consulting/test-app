app.use(express.json());

// API routes
app.use('/api/users', usersRouter);
app.use('/api/members', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/health', healthRouter);
