function nightMode(){
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"darkstyles index.css\" />");
    var cssFile = document.createElement('link');
    cssLink1.rel = 'stylesheet';
    cssLink1.href = "darkstyles index.css"; 
    document.head.appendChild(cssFile); 

}

function lightMode(){
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
        "beforeend",
        "<link rel=\"stylesheet\" href=\"styles.css\" />");
    var cssFile = document.createElement('link');
    cssLink1.rel = 'stylesheet';
    cssLink1.href = "styles.css"; 
    document.head.appendChild(cssFile); 
}



function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  function myFunction1(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImgMain");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
 
 