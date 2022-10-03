function testLog() {
    console.log("Button clicked!");
}

function showImage() {
    var image = document.createElement("img");
    image.src = "sleepy_puppy.JPG";
    image.style = "width: 100%; border: 5px solid #555;";
    image.title = "Sleepy Puppy";
    image.alt = "A small fluffy beige puppy sleeping on a couch.";
    document.body.appendChild(image);
};