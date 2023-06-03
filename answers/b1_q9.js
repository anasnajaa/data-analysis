const {normalizedCountries} = require('../util/normalize');

exports.b1_q9 = async () =>{
    try {
        const countries = await normalizedCountries();

        let dataOf2019 = [];
    
        countries.forEach(country =>{
            country.years.forEach(year =>{
                if(year.year === 2019){
                    dataOf2019.push({
                        country: country.country,
                        value: Number(year.healthyLifeExpectencyAtBirth.male)
                    });
                }
            })
        });
    
        let sorted = dataOf2019.sort((a, b) => {
            return a.value - b.value;
        });
    
        return {
            bottom: [
                sorted[0], sorted[1], sorted[2], sorted[3], sorted[4]
            ],
            top: [
                sorted[181], sorted[180], sorted[179], sorted[178], sorted[177]
            ]
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}