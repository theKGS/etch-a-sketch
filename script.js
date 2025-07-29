reset(16);
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let tileCount = prompt("How big do you want it?");
    console.log(tileCount);
    reset(tilesPerSide);
})




/*
    Clear all children of .container and repopulate it.
*/
function reset(tilesPerSide) {
    const container = document.getElementsByClassName("container");
    container[0].replaceChildren();

    for (let cc = 0; cc < tilesPerSide; cc++) {
        const column = document.createElement("div");
        column.className = "column";
        for (let rc = 0; rc < tilesPerSide; rc++) {
            console.log(container);
            const elm = document.createElement("div");
            elm.className = "element";
            elm.textContent = "H"
            column.appendChild(elm);
        }
        container[0].appendChild(column);
    }
}

