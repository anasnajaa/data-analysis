const { getData } = require('../util/getData');

exports.normalizedCountries = async () => {
   const allData = await getData();

    let countries = [];

    [...allData].forEach((record ,index)=> {
        if(index === 0) return;

        const foundRecord = countries.find(x => x.country === record.country);

        if(foundRecord){
            const lifeExpecAtBirth = record.quarters[0];
            const lifeExpecAtAge60 = record.quarters[1];
            const healthyLifeExpectencyAtBirth = record.quarters[2];
            const healthyLifeExpectencyAtAge60 = record.quarters[3];
            
            foundRecord.years.push({
                year: Number(record.year),
                healthyLifeExpectencyAtAge60: {
                    male: Number(healthyLifeExpectencyAtAge60.male),
                    female: Number(healthyLifeExpectencyAtAge60.female),
                    both: Number(healthyLifeExpectencyAtAge60.both)
                },
                healthyLifeExpectencyAtBirth: {
                    male: Number(healthyLifeExpectencyAtBirth.male),
                    female: Number(healthyLifeExpectencyAtBirth.female),
                    both: Number(healthyLifeExpectencyAtBirth.both)
                },
                lifeExpecAtBirth: {
                    male: Number(lifeExpecAtBirth.male),
                    female: Number(lifeExpecAtBirth.female),
                    both: Number(lifeExpecAtBirth.both)
                },
                lifeExpecAtAge60: {
                    male: Number(lifeExpecAtAge60.male),
                    female: Number(lifeExpecAtAge60.female),
                    both: Number(lifeExpecAtAge60.both)
                }
            });

        } else {
            let temp = {
                country: record.country,
                years: []
            };

            const lifeExpecAtBirth = record.quarters[0];
            const lifeExpecAtAge60 = record.quarters[1];
            const healthyLifeExpectencyAtBirth = record.quarters[2];
            const healthyLifeExpectencyAtAge60 = record.quarters[3];

            temp.years.push({
                year: Number(record.year),
                healthyLifeExpectencyAtAge60: {
                    male: Number(healthyLifeExpectencyAtAge60.male),
                    female: Number(healthyLifeExpectencyAtAge60.female),
                    both: Number(healthyLifeExpectencyAtAge60.both)
                },
                healthyLifeExpectencyAtBirth: {
                    male: Number(healthyLifeExpectencyAtBirth.male),
                    female: Number(healthyLifeExpectencyAtBirth.female),
                    both: Number(healthyLifeExpectencyAtBirth.both)
                },
                lifeExpecAtBirth: {
                    male: Number(lifeExpecAtBirth.male),
                    female: Number(lifeExpecAtBirth.female),
                    both: Number(lifeExpecAtBirth.both)
                },
                lifeExpecAtAge60: {
                    male: Number(lifeExpecAtAge60.male),
                    female: Number(lifeExpecAtAge60.female),
                    both: Number(lifeExpecAtAge60.both)
                }
            });

            countries.push(temp);
        }
    });

    return countries;
}