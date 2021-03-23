process.on('uncaughtException', (error) => {
  console.error(error.message);
  console.error(error.stack);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log(`SIGINT ${process.pid}`);
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(`SIGTERM ${process.pid}`);
  process.exit(0);
});

process.on('SIGUSR2', () => {
  console.log(`SIGUSR2 ${process.pid}`);
  process.exit(1);
});
