const { getData } = require('../util/getData');

exports.a1_q5 = async () => {
    try {
        const allData = await getData();
        let countries = [];
    
        allData.forEach((record ,index)=> {
            if(index === 0) return;
    
            const foundRecord = countries.find(x => x.country === record.country)
            if(foundRecord){
                const lifeExpectOfRecordAtAge60 = record.quarters[1];
    
                foundRecord.years.push({
                    year: Number(record.year),
                    male: Number(lifeExpectOfRecordAtAge60.male),
                    female: Number(lifeExpectOfRecordAtAge60.female),
                    both: Number(lifeExpectOfRecordAtAge60.both)
                });
    
            } else {
                let temp = {
                    country: record.country,
                    years: []
                };
    
                const lifeExpectOfRecordAtAge60 = record.quarters[1];
    
                temp.years.push({
                    year: Number(record.year),
                    male: Number(lifeExpectOfRecordAtAge60.male),
                    female: Number(lifeExpectOfRecordAtAge60.female),
                    both: Number(lifeExpectOfRecordAtAge60.both)
                });
    
                countries.push(temp);
            }
        });
    
        countries.forEach(country => {
            let high = 0;
    
            country.years.forEach(year => {
                if(Number(year.both) > high){
                    high = Number(year.both);
                }
            })
    
            country.highest = high;
        });
    
        let highestOfAll = {value: 0 , country: ''};
    
        countries.forEach(country => {
            if(country.highest > highestOfAll.value ){
                highestOfAll.country = country.country;
                highestOfAll.value = country.highest;
            }
        });
    
        return highestOfAll;
    } catch (err) {
        console.log(err);
        return null;
    }
}
