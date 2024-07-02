function getElementWidth(content, padding, border) {
    let contentWidth = parseFloat (content);
    let paddingWidth = parseFloat (padding);
    let borderWidth = parseFloat (border);

    let totalWidth = (borderWidth + paddingWidth) * 2 + contentWidth;
    
    return totalWidth;
}


console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
