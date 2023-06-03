const {normalizedCountries} = require('../util/normalize');

exports.b1_q7 = async () => {
    try {
        const countries = await normalizedCountries();

        let highest = {
            value: 0,
            country: '',
            year: ''
        };
    
    
        countries.forEach(country => {
            country.years.forEach(year => {
                if(Number(year.healthyLifeExpectencyAtBirth.male) > highest.value){
                    highest.country = country.country;
                    highest.year = year.year;
                    highest.value = Number(year.healthyLifeExpectencyAtBirth.male)
                }
            });
        });
    
        return highest;
    } catch (err) {
        console.log(err);
        return null;
    }
}