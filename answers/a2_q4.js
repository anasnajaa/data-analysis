const {normalizedCountries} = require('../util/normalize');

exports.a2_q4 = async () => {
    try {
        const countries = await normalizedCountries();

        let targetCountries = ['kuwait', 'japan', 'united states of america', 'germany'];
    
        const list = [];
        
        countries.forEach(country => {
            if(targetCountries.indexOf(country.country) > -1 ){
                let temp = {
                    country: country.country,
                    years: country.years
                };
                list.push(temp);
            }
    
        });
    
        console.log(list[0].years)
    
        return list;
    } catch (err) {
        console.log(err);
        return null;
    }
}
