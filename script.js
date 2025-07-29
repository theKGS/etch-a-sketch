reset(16);
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let tileCount = prompt("How big do you want it?");
    reset(min(tileCount, 10));
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
            const elm = document.createElement("div");
            elm.className = "element";
            
            elm.addEventListener("mouseenter", (e) => {
                console.log(e.target);
                elm.setAttribute("style", "background-color: black;");
            });

            column.appendChild(elm);
        }
        container[0].appendChild(column);
    }
}