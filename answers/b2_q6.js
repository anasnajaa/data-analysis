const {normalizedCountries} = require('../util/normalize');

exports.b2_q6 = async () => {
    const countries = await normalizedCountries();

    const kuwaitData = countries.find(x => x.country === 'kuwait');

    let worstOfAllMale = {
        year: kuwaitData.years[0].year,
        value: kuwaitData.years[0].lifeExpecAtBirth.male
    }
    
    let worstOfAllFemale = {
        year: kuwaitData.years[0].year,
        value: kuwaitData.years[0].lifeExpecAtBirth.female
    }

    let bestOfAllMale = {
        year: 0,
        value: 0
    }

    let bestOfAllfemale = {
        year: 0,
        value: 0
    }

    kuwaitData.years.forEach(year => {

        if(year.lifeExpecAtBirth.male < worstOfAllMale.value){
            worstOfAllMale.value = year.lifeExpecAtBirth.male;
            worstOfAllMale.year = year.year;
        }

        if(year.lifeExpecAtBirth.female < worstOfAllFemale.value){
            worstOfAllFemale.value = year.lifeExpecAtBirth.male;
            worstOfAllFemale.year = year.year;
        }


        if(year.lifeExpecAtBirth.male >= bestOfAllMale.value){
            bestOfAllMale.value = year.lifeExpecAtBirth.male;
            bestOfAllMale.year = year.year;
        }

        if(year.lifeExpecAtBirth.female >= bestOfAllfemale.value){
            bestOfAllfemale.value = year.lifeExpecAtBirth.female;
            bestOfAllfemale.year = year.year;
        }
    })
    
    const kuwaitResults = [
        {
            label: 'Worst Male',
            value: worstOfAllMale
        },
        {
            label: 'Worst Female',
            value: worstOfAllFemale
        },
        {
            label: 'Best Male',
            value: bestOfAllMale
        },
        {
            label: 'Best Female',
            value: bestOfAllfemale
        }
    ]

    const list = [
        { year: 2000, maleValue: 0, femaleValue: 0 },
        { year: 2010, maleValue: 0, femaleValue: 0 },
        { year: 2015, maleValue: 0, femaleValue: 0 },
        { year: 2019, maleValue: 0, femaleValue: 0 }
    ];

    {
        kuwaitData.years.forEach(year => {
            const point = list.find(x => x.year === year.year);
            if(point){
                point.femaleValue = year.lifeExpecAtBirth.female;
                point.maleValue = year.lifeExpecAtBirth.male;
            }
        })
    }

    return {
        kuwaitResults,
        list,
    };
}
