const {normalizedCountries} = require('../util/normalize');

exports.b2_q7 = async () => {
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
                        year: year.year,
                        country: country.country,
                        male: year.lifeExpecAtAge60.male
                    })
                }
            })
        })
    })

    yearsList.forEach(year => {
        year.sortedMale = year.data.sort((a,b) => {
            return a.male - b.male;
        })
    })

    console.log(year[0].sortedMale)

    let maleRankList = [];

    yearsList.forEach(year => {
        for(let i=0; i<year.sortedMale.length; i++){
            maleRankList.push({
                year: year.year,
                rank: i,
                country: year.sortedMale[i].country,
                value: year.sortedMale[i].male
            });
        }
    })

    let best3 = [
        { year: 2000, data: [] },
        { year: 2010, data: [] },
        { year: 2015, data: [] },
        { year: 2019, data: [] }
    ];

    let worst3 = [
        { year: 2000, data: [] },
        { year: 2010, data: [] },
        { year: 2015, data: [] },
        { year: 2019, data: [] }
    ];
    
    yearsList.forEach(year => {

    })

    return {
        best3, worst3
    };
}