const {normalizedCountries} = require('../util/normalize');

exports.a2_q3 = async () => {
    try {
        const countries = await normalizedCountries();
        let years = [];
    
        countries.forEach(country => {
            country.years.forEach(year => {
                if(!year.year) return;
                if(year.year >= 2000 && year.year <= 2019){
    
                    const yearFound = years.find(x => x.year === year.year);
    
                    if(yearFound){
    
                        yearFound.ranges.forEach(range => {
                            if(year.healthyLifeExpectencyAtBirth.male >= range.low &&
                                year.healthyLifeExpectencyAtBirth.male <= range.high ){
                                range.data.push(year.healthyLifeExpectencyAtBirth.male);
                            }
                        })
    
                    } else {
                        let temp = { year: year.year, ranges: [] }
                        let counter = 30;
                    
                        while (counter <= 90){
                            temp.ranges.push({
                                low: counter,
                                high: counter+5,
                                label: `${counter} - ${counter+5}`,
                                data: []
                            });
                            counter+=5;
                        }
    
                        
                        temp.ranges.forEach(range => {
                            if(year.healthyLifeExpectencyAtBirth.male >= range.low &&
                                year.healthyLifeExpectencyAtBirth.male <= range.high ){
                                range.data.push(year.healthyLifeExpectencyAtBirth.male);
                            }
                        })
                        
                        years.push(temp);
                    }
                }
            });
        });
    
        return years;
    } catch (err) {
        console.log(err);
        return null;
    }
}