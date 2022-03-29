function myFunction() {
    var x = document.getElementById("h1");
    

    if (x.className === "head1") {
        x.className += " responsive";
        i.classList.remove("fa-bars")
        i.classList.add("fa-times")

    } else {
        x.className = "head1";
        i.classList.remove("fa-times")
        i.classList.add("fa-bars")
    }
}
