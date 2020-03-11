module.exports = class DepthCalculator {
    calculateDepth(arr) {
       if(!Array.isArray(arr))return 0;

        let count=1;

        arr.forEach(elem => {
            if(Array.isArray(elem)){
                count = Math.max(this.calculateDepth(elem) + 1, count);
            }

        })

    return count;
    }
};