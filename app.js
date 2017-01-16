var express=require('express');
var app=express();

app.set('view engine','jade');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render('home',{
                        headline:'We believe that every city has something to say'
                    });
});

app.get('/:city',function(req,res){
    var cityName = req.params.city;
    var title,heading;
    // console.log(cityName);

    if(cityName==='berlin'){
        title="Berlin";
        heading="Berlin:Capital of Germany";        
    } else 
    if(cityName==='paris'){
        title="Paris";
        heading="Paris:Capital of France";
    } else
    if(cityName==='madrid'){
        title="Madrid";
        heading="Madrid:Capital of Spain";
    } else
    if(cityName==='london'){
        title="London";
        heading="London:Capital of England";
    } else
    if(cityName==='newyork'){
        title="New York";
        heading="New York: Capital city for trade";
    }
    res.render('home',{
    title: title,
    headline:heading,
    city:cityName
    });
});

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
