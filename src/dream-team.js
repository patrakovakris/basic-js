module.exports = function createDreamTeam(members) {
	if(!Array.isArray(members)) return false;
	
    let code =[];
    members.map(function(m){
        if(typeof m =='string')
            code.push(m.trim().charAt().toUpperCase());
    })

    return code.sort().join('');
};