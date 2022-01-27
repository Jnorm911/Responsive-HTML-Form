function openNav() {
    document.getElementById("navMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("navMenu").style.width = "0%";
}

const myCollection = document.getElementsByTagName("navMenu");
for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
}