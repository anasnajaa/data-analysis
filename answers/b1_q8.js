const {normalizedCountries} = require('../util/normalize');

exports.b1_q8 = async () =>{
    try {
        const countries = await normalizedCountries();

        let dataOf2000 = [];
    
        countries.forEach(country =>{
            country.years.forEach(year =>{
                if(year.year === 2000){
                    dataOf2000.push({
                        country: country.country,
                        value: Number(year.lifeExpecAtBirth.female)
                    });
                }
            })
        });
    
        let sorted = dataOf2000.sort((a, b) => {
            return b.value - a.value;
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