const express = require('express');
const peopleRoutes = require('./routes/people');
const carRoutes = require('./routes/cars');
// const routes = require('./routes');
const camelCaseDeep = require('camelcase-object-deep');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//make sure this is before any of the actual routes!!
app.use((req, res, next) => {
    const originalJson = res.json;
    res.json = function(data) {
        originalJson.call(this, camelCaseDeep(data));
    };
    next();
});

app.use('/api/people', peopleRoutes);
app.use('/api/cars', carRoutes);
// app.use('/api', routes);


app.listen(4000, () => console.log('server started'));