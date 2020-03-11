module.exports = function repeater(str, options) {
    if (!options) options = {};
    if (typeof str !== 'string') str = String(str);

    string='';
    if(options.repeatTimes === undefined) options.repeatTimes = 1;
    if(options.separator === undefined) options.separator = '+';
    if(options.additionSeparator === undefined ) options.additionSeparator='|';
    if(options.addition === undefined) options.addition = '';
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;

    console.log(options);
    for(let i=0; i < options.repeatTimes; i++){
        string += str;
        for(let j=0; j < options.additionRepeatTimes; j++){

            string += options.addition;

            if(j+1 !== options.additionRepeatTimes){
                string += options.additionSeparator ;
            }
        }
        if(i+1 !== options.repeatTimes){
            string += options.separator ;
        }
    }
    // console.log(string);
    return string;
};
  