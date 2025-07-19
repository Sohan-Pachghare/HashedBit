const text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = () => {
    const color = document.getElementById("colorbox").value;
    text.style.color = color;
};



document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

//Decoration 
document.getElementById("underline").onclick = () => {
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
};

document.getElementById("italic").onclick = () => {
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
};

document.getElementById("bold").onclick = () => {
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
};
 // decoration end //

// font family
document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

// Display CSS prop
document.getElementById("getstyle").onclick = () => {
    const style = window.getComputedStyle(text);
    const props = [
        `color: ${style.color}`,
        `font-size: ${style.fontSize}`,
        `font-family: ${style.fontFamily}`,
        `font-weight: ${style.fontWeight === "700" ? "bold" : "normal"}`,
        `font-style: ${style.fontStyle}`,
        `text-decoration: ${style.textDecoration.includes("underline") ? "underline" : "none"}`
    ];
    document.getElementById("css-props").innerText = props.join("; ") + ";";
};

