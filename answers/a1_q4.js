const { getData } = require('../util/getData');

exports.a1_q4 = async () => {
    try {
        const allData = await getData();
    
        const kuwaitOverYears = allData.filter(x => x.country === 'kuwait');
    
        let rows = [];
        let totalOfLifeExpectKuwait = 0;
        kuwaitOverYears.forEach(kuwaitAtYear => {
            const lifeExpectAtYEar = kuwaitAtYear.quarters[0];
            totalOfLifeExpectKuwait += Number(lifeExpectAtYEar.male);
    
            rows.push({
                text: `male of kuwait at year ${kuwaitAtYear.year} is ${lifeExpectAtYEar.male}`
            });
        });
    
        rows.push({
            text: `The average life expectency at birth for kuwaiti males is ${(totalOfLifeExpectKuwait/4)}` 
        });
    
        return rows;
    } catch (err) {
        console.log(err);
        return null;
    }
}
