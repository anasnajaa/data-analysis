const { getData } = require('../util/getData');

exports.a1_q3 = async () => {
    const allData = await getData();
    let uniqueYears = [];

    allData.forEach(row => {
        if(!uniqueYears.find(x => x === row.year)){
            if((row.year !== undefined && row.year !== 'Year')){
                uniqueYears.push(row.year);
            }
        }
    })

    const normalYears = uniqueYears.map(x => {return {year: x}});

    return normalYears;
}
