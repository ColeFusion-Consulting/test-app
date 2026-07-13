app.use(express.json());

app.use('/api/members', usersRouter);
app.use('/api/users', usersRouter); // Restore old route for backward compatibility
app.use('/api/tasks', tasksRouter);
app.use('/api/health', healthRouter);
