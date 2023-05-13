const {normalizedCountries} = require('../util/normalize');

exports.b2_q6 = async () => {
    const countries = await normalizedCountries();

    let yearsList = [
        { year: 2000, data: [] },
        { year: 2010, data: [] },
        { year: 2015, data: [] },
        { year: 2019, data: [] }
    ];

    countries.forEach(country => {
        country.years.forEach(year => {
            yearsList.forEach(yearItem => {
                if(yearItem.year === year.year){
                    yearItem.data.push({
                        country: country.country,
                        male: year.lifeExpecAtBirth.male,
                        female: year.lifeExpecAtBirth.female
                    })
                }
            })
        })
    })

    let kuwaitFemaleRankList = [];
    let kuwaitMaleRankList = [];

    yearsList.forEach(year => {
        year.sortedMale = year.data.sort((a,b) => {
            return a.male - b.male;
        })
        year.sortedFemale = year.data.sort((a,b) => {
            return a.female - b.female;
        })
    })

    yearsList.forEach(year => {
        for(let i=0; i<year.sortedMale.length; i++){
            if(year.sortedMale[i].country === 'kuwait') {
                kuwaitMaleRankList.push({
                    year: year.year,
                    rank: i,
                    value: year.sortedMale[i].male
                });
            }
        }

        for(let i=0; i<year.sortedFemale.length; i++){
            if(year.sortedFemale[i].country === 'kuwait') {
                kuwaitFemaleRankList.push({
                    year: year.year,
                    rank: i,
                    value: year.sortedFemale[i].female
                });
            }
        }
    })


    let worstRankMale = {year: 0, value: 10000, rank: 100000};
    let worstRankFemale = {year: 0, value: 10000, rank: 100000};

    let bestRankMale = {year: 0, value: 10000, rank: 0};
    let bestRankFemale = {year: 0, value: 10000, rank: 0};

    kuwaitMaleRankList.forEach(item => {
        if(item.rank < worstRankMale.rank) {
            worstRankMale.rank = item.rank;
            worstRankMale.value = item.value;
            worstRankMale.year = item.year;
        }

        if(item.rank > bestRankMale.rank) {
            bestRankMale.rank = item.rank;
            bestRankMale.value = item.value;
            bestRankMale.year = item.year;
        }
    });

    kuwaitFemaleRankList.forEach(item => {
        if(item.rank < worstRankFemale.rank) {
            worstRankFemale.rank = item.rank;
            worstRankFemale.value = item.value;
            worstRankFemale.year = item.year;
        }

        if(item.rank > bestRankFemale.rank) {
            bestRankFemale.rank = item.rank;
            bestRankFemale.value = item.value;
            bestRankFemale.year = item.year;
        }
    });

    return {
        kuwaitMaleRankList,
        kuwaitFemaleRankList,
        bestWorst: [
            {
                label: 'Best Rank Male',
                data: bestRankMale
            },
            {
                label: 'Worst Rank Male',
                data: worstRankMale
            },
            {
                label: 'Best Rank Female',
                data: bestRankFemale
            },
            {
                label: 'Worst Rank Female',
                data: worstRankFemale
            }
        ]
    };
}
