var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser.json());                //support json encoded bodies
app.use(bodyParser.urlencoded({extended:true}))  //support encoded bodies

var server = require('http').Server(app);
var io = require('socket.io')(server);
var db = require('./database');

let connectedUsers = 0;
server.listen(3000, () => {
	console.log('listening on port *:3000');
});

app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});

app.post('/api/login', function(req,res){	
  var user_email = req.body.email;
  var password = req.body.password;
  var username = user_email.split('@')[0];
  const user =   {
  	email: user_email,
  	password: password,
  	username: username
  }
  let userPresent=0;
	for(let key in db.users){
		if(db.users[key].email.toLowerCase() === user.email.toLowerCase()){
			userPresent=1;
		}
	}
  if(!userPresent){
      	 ++maxUser;
      	 user.id = maxUser;
      	 db.users[maxUser] = user
      	 console.log('inserted at ',maxUser );
  }

  
  let data = {}
  data.email = user.email;
  data.id = user.id;
  data.login = true;
  data.username = user.username; 
  console.log(db.users)  
  res.json(data);	
})


let messageKeys = []
for(let key in db.messages){
	messageKeys.push(key);
}
var maxMessage = Math.max(...messageKeys);
if(maxMessage>=0){
	console.log(maxMessage)
}
else{
	maxMessage=0;
}

let userKeys = []
for(let key in db.users){
	userKeys.push(key)
}
var maxUser = Math.max(...userKeys);
if(maxUser>=0){
	console.log(maxUser)
}
else{
	maxUser = 0;
}

io.on('connection', (socket) => {
	console.log('A client just joined on', socket.id);
      
      socket.on('new connection', function(user){
        ++connectedUsers;
        let username = userNameOf(user.id);
        socket.broadcast.emit('user joined',{
        	username: username,
        	connections: connectedUsers
        })
        console.log('id',user.id);
        console.log(username);
        console.log(connectedUsers);

      })

      socket.on('typing', function(data){
      	let username = userNameOf(data.id);
      	console.log(data.id);
      	console.log(username +' is typing', data.id);
      })

	  // socket.on('chat message', function(msg){
   //       console.log('message: ' + msg);
   //    });

      socket.on('new message', function(message){
          ++maxMessage;   
          message.id = maxMessage;
          message.timestamp = new Date().getTime;   	   
          db.messages[maxMessage] = message
          console.log(db.messages);
          let username = userNameOf(message.senderId); 
          socket.broadcast.emit('new message', {
            username: username,
            message: message.message
          })
      })

})

const userNameOf = (id) => {
			for(let key in db.users){
				if(key == id){
					let username = db.users[key].username;
					return username;
				}
			}	
}

// message = {
// 	  threadId: 1,
// 	  senderId: 2
// }