const { getData } = require('../util/getData');

exports.a1_q2 = async () => {
    try {
        const allData = await getData();
        const unique = [];
        allData.forEach((row, index) => {
            if(index === 0)return;
            if(!unique.find(x => x.country === row.country)){
                if(row.country){
                    unique.push({...row})
                }
            }
        });
    
        return unique;
    } catch(err){
        console.log(err);
        return null;
    }
}
