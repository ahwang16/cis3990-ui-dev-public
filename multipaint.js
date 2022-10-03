var myPath;
var newpath;
var websocket = new WebSocket("ws://localhost:8003");

websocket.onmessage = function (event) {
    var msg = JSON.parse(event.data);
    if (msg.type == 'mousedown') {
        newpath = new Path();
        newpath.strokeColor = 'cyan';
    }
    else if (msg.type == 'mouseup') {
        var circle = new Path.Circle(new Point(msg.x, msg.y), msg.radius);
        circle.strokeColor = 'cyan';
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