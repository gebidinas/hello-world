var fs = require('fs');
var http = require('http');
var util = require('util');
var events = require('events');
var module1 = require('./module1');
var module2 = require('./module2');

http.createServer(function (req, res) {
    console.log('requested url : ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text.html' });
        fs.createReadStream('index.html').pipe(res);
        
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var jsonObj = {
            name: "max",
            surname: 'snow',
            age: 36
        };
        res.end(JSON.stringify(jsonObj));
    }
    else if (req.url === '/module') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(module2.myVariable);
        module2.myFunction();
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text.html' });
        fs.createReadStream('404.html').pipe(res);
    }
}).listen(3000);

console.log('Server is running on http://127.0.0.1:3000 port')

var eventEmitter = new events.EventEmitter();

eventEmitter.on('button', function(clicked){
    console.log( clicked + 'is clicked');

})

eventEmitter.emit('button', 'clicked 2');

var Students = function(name) {
    this.name = name;
}

util.inherits(Students, events.EventEmitter);

var max = new Students('max');

max.on('scored', function(marks){
    console.log(max.name + 'scores' + marks + 'marks');
})

max.emit('scored', 40);

var tom = new Students('tom');

tom.on('scored', function(marks){
    console.log(tom.name + 'scores' + marks + 'marks');
})

tom.emit('scored', 20);

var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time+ 'seconds has pased');
    if (time>4){
        clearInterval(timer);
    }

}, 3000);

console.log(__dirname);
console.log(__filename);

var readStream = fs.createReadStream('Read.txt', 'utf8');
var data = '';
readStream.on('data', function(chunk){
    console.log('=============================================');
    data += chunk;
    //console.log(chunk);
})

readStream.on('end', function(chunk){
    console.log(data);
    console.log('====================END=========================');
})


