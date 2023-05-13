const {normalizedCountries} = require('../util/normalize');

exports.b1_q6 = async () => {
    const countries = await normalizedCountries();

    let lowestOFAll = {
        country: countries[0].country,
        value: countries[0].years[0].healthyLifeExpectencyAtAge60.female
    };

    countries.forEach(country =>{
        country.years.forEach(year =>{
            if(year.healthyLifeExpectencyAtAge60.female < lowestOFAll.value){
                lowestOFAll.country = country.country;
                lowestOFAll.value = year.healthyLifeExpectencyAtAge60.female;
            }
        })
    });

    return lowestOFAll;
}
