// Add event listener to the "Change to Image" button for mousedown event
document.getElementById("imagebutton1").addEventListener("mousedown", function() {
    // Show the image and hide the fixed image
    document.getElementById('imagemystery').style.display = 'none';
    document.getElementById("imagedog").style.display = "inline-block";
});

// Add event listener to the document for mouseup event
document.addEventListener("mouseup", function() {
    // Hide the image
    document.getElementById("imagedog").style.display = "none";
    document.getElementById('imagemystery').style.display = 'inline-block';
});

// Add event listener to the "Change to Image" button for mousedown event
document.getElementById("imagebutton2").addEventListener("mousedown", function() {
    // Show the image
    document.getElementById('imagemystery').style.display = 'none';
    document.getElementById("imagelie").style.display = "inline-block";
});

// Add event listener to the document for mouseup event
document.addEventListener("mouseup", function() {
    // Hide the image
    document.getElementById("imagelie").style.display = "none";
    document.getElementById('imagemystery').style.display = 'inline-block';
});

// Add event listener to the "Change to Image" button for mousedown event
document.getElementById("imagebutton3").addEventListener("mousedown", function() {
    // Show the image
    document.getElementById('imagemystery').style.display = 'none';
    document.getElementById("imagetrue").style.display = "inline-block";
});

// Add event listener to the document for mouseup event
document.addEventListener("mouseup", function() {
    // Hide the image
    document.getElementById("imagetrue").style.display = "none";
    document.getElementById('imagemystery').style.display = 'inline-block';
});