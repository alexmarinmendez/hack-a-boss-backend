import express from 'express'

const app = express()

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => res.json({ data: 'secret data' }))

app.listen(8080, () => console.log('Server Up'))