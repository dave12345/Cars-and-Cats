var http = require('http');
var fs = require('fs');
//creating a server
server = http.createServer(function (request, response){
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  if(request.url === '/cars'){
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/red.jpg'){
    fs.readFile('./images/red.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/hydro.jpg'){
    fs.readFile('./images/hydro.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
    else if(request.url === '/images/america.jpg'){
    fs.readFile('./images/america.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
   else if(request.url === '/cats'){
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } 
  else if(request.url === '/images/sweater.jpg'){
    fs.readFile('./images/sweater.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/cattitude.jpg'){
    fs.readFile('./images/cattitude.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/images/glasses.jpg'){
    fs.readFile('./images/glasses.jpg', function(errors, contents){
     response.write(contents);
     response.end();
    })
  }
  else if(request.url === '/cars/new'){
    fs.readFile('views/new.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } 
  else {
    response.end('File not found!!!');
  }
});
server.listen(8000);
console.log("Running in localhost at port 8000");