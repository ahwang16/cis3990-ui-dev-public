window.addEventListener("load", function() {
    document.body.style.backgroundColor = "lightblue";

    console.log("hello!");

    var myTextArea = document.querySelector("textarea#codemirror-textarea-1");
    var myCodeEditor = document.querySelector("#code-editor-container-1");
    console.log(myCodeEditor);
    myCodeEditor.style = "left: 100px; top: 400px;"
    var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
        mode: "javascript",
        lineNumbers: true,
    });

    console.log(myCodeMirror);

    var myCodeHandle = document.querySelector("#codemirror-handle-1");
    myCodeHandle.addEventListener("mousedown", function(event) {
        function mouseMoveHandler(event) {
            console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
        }

        function mouseUpHandler() {
            window.removeEventListener("mousemove", mouseMoveHandler);
            window.removeEventListener("mouseup", mouseUpHandler);
        }

        window.addEventListener("mousemove", mouseMoveHandler);
        window.addEventListener("mouseup", mouseUpHandler);
    })




});