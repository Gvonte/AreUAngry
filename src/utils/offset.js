export default elem => {
    let top = elem.offsetTop,
        left = elem.offsetLeft;  
    while (elem.offsetParent) {
        elem = elem.offsetParent;
        top += elem.clientTop + elem.offsetTop;
        left += elem.clientLeft + elem.offsetLeft;
    }
    return {
        top, left
    }
}