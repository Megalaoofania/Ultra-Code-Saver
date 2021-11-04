function websitesearch()
{
console.log("Received.")
if(document.getElementById("searchweb").value == "example.com")
{
    console.log("Loading...")
    location.href = 'Ultra-Code-Saver/example.com/menu.html'
} else if(document.getElementById("searchweb").value == "testsite1.com") {
    console.log("Loading...")
    location.href = 'Ultra-Code-Saver/Test%20Site/testsite1.html'
} else {
    console.log("Loading...")
    location.href = "Ultra-Code-Saver/Error/Error404.html"
}
}
