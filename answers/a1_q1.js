const { getData } = require('../util/getData');

exports.a1_q1 = async () => {
    const allData = await getData();

    let countries = [];

    allData.forEach((record ,index)=> {
        if(index === 0) return;

        const foundRecord = countries.find(x => x.country === record.country);

        if(foundRecord){
            const lifeExpecAtBirth = record.quarters[0];
            const lifeExpecAtAge60 = record.quarters[1];
            const healthyLifeExpectencyAtBirth = record.quarters[2];
            const healthyLifeExpectencyAtAge60 = record.quarters[3];
            
            foundRecord.years.push({
                year: record.year,
                healthyLifeExpectencyAtAge60: {
                    male: healthyLifeExpectencyAtAge60.male,
                    female: healthyLifeExpectencyAtAge60.female,
                    both: healthyLifeExpectencyAtAge60.both
                },
                healthyLifeExpectencyAtBirth: {
                    male: healthyLifeExpectencyAtBirth.male,
                    female: healthyLifeExpectencyAtBirth.female,
                    both: healthyLifeExpectencyAtBirth.both
                },
                lifeExpecAtBirth: {
                    male: lifeExpecAtBirth.male,
                    female: lifeExpecAtBirth.female,
                    both: lifeExpecAtBirth.both
                },
                lifeExpecAtAge60: {
                    male: lifeExpecAtAge60.male,
                    female: lifeExpecAtAge60.female,
                    both: lifeExpecAtAge60.both
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
                year: record.year,
                healthyLifeExpectencyAtAge60: {
                    male: healthyLifeExpectencyAtAge60.male,
                    female: healthyLifeExpectencyAtAge60.female,
                    both: healthyLifeExpectencyAtAge60.both
                },
                healthyLifeExpectencyAtBirth: {
                    male: healthyLifeExpectencyAtBirth.male,
                    female: healthyLifeExpectencyAtBirth.female,
                    both: healthyLifeExpectencyAtBirth.both
                },
                lifeExpecAtBirth: {
                    male: lifeExpecAtBirth.male,
                    female: lifeExpecAtBirth.female,
                    both: lifeExpecAtBirth.both
                },
                lifeExpecAtAge60: {
                    male: lifeExpecAtAge60.male,
                    female: lifeExpecAtAge60.female,
                    both: lifeExpecAtAge60.both
                }
            });

            countries.push(temp);
        }
    });


    let data = [];
    countries.forEach(contry=> {
        contry.years.forEach(year => {
            data.push({
                country: contry.country, 
                year: year.year, 
                both: year.healthyLifeExpectencyAtAge60.both, 
                male: year.healthyLifeExpectencyAtAge60.male, 
                female: year.healthyLifeExpectencyAtAge60.female,
                category: 'Healthy Life Expectency At Age 60'
            })

            data.push({
                country: contry.country, 
                year: year.year, 
                both: year.healthyLifeExpectencyAtBirth.both, 
                male: year.healthyLifeExpectencyAtBirth.male, 
                female: year.healthyLifeExpectencyAtBirth.female,
                category: 'Healthy Life Expectency At Birth'
            })

            data.push({
                country: contry.country, 
                year: year.year, 
                both: year.lifeExpecAtBirth.both, 
                male: year.lifeExpecAtBirth.male, 
                female: year.lifeExpecAtBirth.female,
                category: 'life Expecy At Birth'
            })

            data.push({
                country: contry.country, 
                year: year.year, 
                both: year.lifeExpecAtAge60.both, 
                male: year.lifeExpecAtAge60.male, 
                female: year.lifeExpecAtAge60.female,
                category: 'life Expecy At Age 60'
            })
        })

    })

    return data;
}