module.exports = function transform( arr ) {
    if(!Array.isArray(arr)) throw new Error();
    t=[];
    for (let i = 0; i < arr.length; i++) {

            if (arr[i] === '--discard-next'){
                // arr.splice(arr[i+1],1);
                i++;
            }else if(arr[i] === '--discard-prev'){
                t.pop();
            }else if(arr[i] === '--double-next'){
                t.push(arr[i + 1]);
            }else if(arr[i] === '--double-prev'){
                t.push(arr[i - 1]);
            }else{
                t.push(arr[i]);
            }

    }

    // console.log(t);
    return t.filter(e=>e !==undefined);
};
