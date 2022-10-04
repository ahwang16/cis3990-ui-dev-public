var myPath;
var partnerPath;
var websocket = new WebSocket("ws://localhost:8003");

websocket.onmessage = function (event) {
    var msg = JSON.parse(event.data);
    if (msg.type == 'mousedown') {
        partnerPath = new Path();
        partnerPath.strokeColor = 'cyan';
    }
    else if (msg.type == 'mouseup') {
        var partnerCircle = new Path.Circle(new Point(msg.x, msg.y), msg.radius);
        partnerCircle.strokeColor = 'cyan';
    }
}

function onMouseDown() {
    myPath = new Path();
    myPath.strokeColor = 'black';

    var msg = {
        type: 'mousedown',
        strokeColor: 'black'
    }
    
    websocket.send(JSON.stringify(msg));
}

function onMouseUp(event) {
    var myCircle = new Path.Circle({
        center: event.point,
        radius: 10
    });
    myCircle.strokeColor = 'black';
    myCircle.fillColor = 'white';

    var msg = {
        type: 'mouseup',
        x: event.point.x,
        y: event.point.y,
        point: event.point,
        radius: 10
    }

    websocket.send(JSON.stringify(msg));
}