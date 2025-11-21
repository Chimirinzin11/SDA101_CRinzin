// Change the main title text
document.getElementById("changeTextBtn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.textContent = "Title has been changed!";
    title.classList.toggle("highlight"); // Adds red bold effect
});

// Add a new paragraph inside the container
document.getElementById("addElementBtn").addEventListener("click", function () {
    const container = document.getElementById("container");

    const newPara = document.createElement("p");
    newPara.textContent = "This is a new dynamically added paragraph.";
    newPara.classList.add("content");

    container.appendChild(newPara);
});

// Remove the last element from the container
document.getElementById("removeElementBtn").addEventListener("click", function () {
    const container = document.getElementById("container");
    const lastChild = container.lastElementChild;

    // Make sure not to delete the <h3> title
    if (container.children.length > 1) {
        container.removeChild(lastChild);
    } else {
        alert("No more elements to remove!");
    }
});
