const {normalizedCountries} = require('../util/normalize');

exports.b2_q7 = async () => {
    const countries = await normalizedCountries();

    let list = [];

    countries.forEach(country => {
        country.years.forEach(year => {
            const countryFound = list.find(x => x.country === country.country);
            if(countryFound){
                countryFound.values.push(year.lifeExpecAtAge60.male)
            } else {
                list.push({
                    country: country.country,
                    values: [year.lifeExpecAtAge60.male]
                })
            }
        });
    })

    list.forEach(country => {
        country.delta1 = country.values[1] - country.values[0];
        country.delta2 = country.values[2] - country.values[1];
        country.delta3 = country.values[3] - country.values[2];
        country.deltaSum = country.delta1 + country.delta2 + country.delta3;
    });

    let sorted = list.sort((a, b) => {
        return b.deltaSum - a.deltaSum;
    });

    let best3 = [sorted[0], sorted[1], sorted[2]];
    let worst3 = [sorted[181], sorted[180], sorted[179]];

    return {
        best3, worst3
    };
}