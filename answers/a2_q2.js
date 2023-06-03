const {normalizedCountries} = require('../util/normalize');

exports.a2_q2 = async () => {
    try {
        const countries = await normalizedCountries();

        const yearsMedian = [];
        
        countries.forEach(country => {
            country.years.forEach(year => {
                if(!year.year) return;
                const yearFound = yearsMedian.find(x => x.year === year.year);
                if(yearFound){
                    yearFound.healthyLifeExpectencyAtBirthTotal += year.healthyLifeExpectencyAtBirth.both;
                    yearFound.lifeExpecAtBirthTotal += year.lifeExpecAtBirth.both;
                    yearFound.count += 1;
                } else {
                    let temp = {
                        year: year.year,
                        healthyLifeExpectencyAtBirthTotal: 0,
                        lifeExpecAtBirthTotal: 0,
                        count: 0
                    };
                    temp.healthyLifeExpectencyAtBirthTotal += year.healthyLifeExpectencyAtBirth.both;
                    temp.lifeExpecAtBirthTotal += year.lifeExpecAtBirth.both;
                    temp.count += 1;
                    yearsMedian.push(temp);
                }
            })
        });
    
        yearsMedian.forEach(year => {
            year.lifeExpecAtBirthMedian = year.lifeExpecAtBirthTotal / year.count;
            year.healthyLifeExpectencyAtBirthMedian = year.healthyLifeExpectencyAtBirthTotal / year.count;
        });
    
        console.log(yearsMedian)
    
        return yearsMedian;
    } catch (err) {
        console.log(err);
        return null;
    }
}
