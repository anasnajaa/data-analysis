const {normalizedCountries} = require('../util/normalize');

exports.a2_q1 = async () => {
    const countries = await normalizedCountries();

    const ranges = [
        { low: 0, high: 40 },
        { low: 40, high: 50 },
        { low: 50, high: 60 },
        { low: 60, high: 70 },
        { low: 70, high: 80 },
        { low: 80, high: 90 }
    ]

    countries.forEach(country => {
        country.years.forEach(year => {
            if(year.year === 2019){
                console.log(year.healthyLifeExpectencyAtBirth);
            }
            
        })
    })

    return null;
}
