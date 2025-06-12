const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use('/sdk/docs/rn3d', express.static(path.join(__dirname, 'docs_html')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});