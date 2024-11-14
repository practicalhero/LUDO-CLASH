const draggables = document.querySelectorAll(".draggable");

draggables.forEach(draggable => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    draggable.addEventListener("mousedown", (e) => {
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
        isDragging = true;
        draggable.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            draggable.style.left = e.clientX - offsetX + "px";
            draggable.style.top = e.clientY - offsetY + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        draggable.style.cursor = "grab";
    });
});