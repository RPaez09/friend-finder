const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(express.static('assets'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(port, () => {
    console.log(`Friend Finder listening on port: ${port}`);
});