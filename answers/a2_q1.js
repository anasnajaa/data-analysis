const {normalizedCountries} = require('../util/normalize');

exports.a2_q1 = async () => {
    const countries = await normalizedCountries();

    const ranges = [
        { low: 0, high: 40, male: [], female: [], both:[] },
        { low: 40, high: 50, male: [], female: [], both:[] },
        { low: 50, high: 60, male: [], female: [], both:[] },
        { low: 60, high: 70, male: [], female: [], both:[] },
        { low: 70, high: 80, male: [], female: [], both:[] },
        { low: 80, high: 90, male: [], female: [], both:[] }
    ];

    countries.forEach(country => {
        country.years.forEach(year => {
            if(year.year === 2019){
                ranges.forEach(range => {

                    if(year.healthyLifeExpectencyAtBirth.male >= range.low &&
                        year.healthyLifeExpectencyAtBirth.male < range.high){
                        range.male.push(year.healthyLifeExpectencyAtBirth.male);
                    }

                    if(year.healthyLifeExpectencyAtBirth.female >= range.low &&
                        year.healthyLifeExpectencyAtBirth.female < range.high){
                        range.female.push(year.healthyLifeExpectencyAtBirth.female);
                    }

                    if(year.healthyLifeExpectencyAtBirth.both >= range.low &&
                        year.healthyLifeExpectencyAtBirth.both < range.high){
                        range.both.push(year.healthyLifeExpectencyAtBirth.both);
                    }
                })
            }
        })
    });

    return ranges;
}
