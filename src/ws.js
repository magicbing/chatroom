var ws = new WebSocket('ws://localhost:8081')

ws.onmessage = function (msg) {
  if (msg.data == "linkok") {
    console.log(msg.data)
    return
  }
  console.log(JSON.parse(msg.data).name)
  //console.log( JSON.stringify(msg.data) )
  //console.log( msg )
  ws.onclose = function (evt) { console.log('WebSocketClosed!'); };
}

var send = {
  send: function(msg){
    ws.send(msg)
  }
}
module.exports = send