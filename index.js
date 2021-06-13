const app = require('./src/app');

const port = process.env.APP_PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
