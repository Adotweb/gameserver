const app = require("localhostjs");

const env = require("./env.json")


let clients = new Map();

app.socket.on("register", (data) => {

	console.log(data)

})

app.listen(env)
