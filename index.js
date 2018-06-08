

function insertIfArr(condition, ...elements) {
    return condition ? elements : [];
}

function insertIfObj(condition, element) { 
    return condition ? element : {};
}
