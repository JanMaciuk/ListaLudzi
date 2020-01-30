const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let lista = []

app.post('/lista', function(req,res){
    const osobnik = {
        alive: true,
        age: req.body.age,
        name: req.body.name,
        iq: req.body.iq
    }
    res.send("Dodano osobnika: " + JSON.stringify(osobnik));
    lista.push(osobnik)
    data.save()
})

app.delete('/lista/:name', function(req,res){
    const NAME = req.params.name
    lista = lista.filter( lista => lista.NAME != NAME);
    res.send('ojej! usuwamy owcę ' + NAME)
    req.send("usuwanie osobnika:" + NAME)
    data.save()
})

app.get('/lista', function(req,res){
    res.send(lista);

})

app.listen(2137, ()=>console.log('serwer jest gotowy: http://localhost:2137'))