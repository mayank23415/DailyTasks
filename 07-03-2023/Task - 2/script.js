function main() {
    var head = document.getElementById("heading");
    var paragraph = document.getElementById("paragraph");
    var image = document.getElementById("image");
    
    head.textContent = "Data Changed";
    paragraph.textContent += "And we will change the data of this element using textContent property.";

    //changing image by adding a different source.
    image.src = "Images/wallpaperflare.com_wallpaper (7).jpg";
}