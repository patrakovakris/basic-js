module.exports = function countCats(matrix) {
	
    if(!Array.isArray(matrix) || matrix.length==0){
        return 0
    }

    let cats=0;
    matrix.map(function (elem) {
        cats += elem.filter(item => item == "^^").length;
    })
    return cats;
};
