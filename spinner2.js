setTimeout(() => {
  process.stdout.write('\r|   ')
  setTimeout(() => {
    process.stdout.write('\r/   ')
  }, 300);
  setTimeout(() => {
    process.stdout.write('\r-   ')
  }, 500);
  setTimeout(() => {
    process.stdout.write('\r\\   ')
  }, 700);
  setTimeout(() => {
    process.stdout.write('\r|   ')
  }, 900);
}, 100);

