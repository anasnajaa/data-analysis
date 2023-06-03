const {normalizedCountries} = require('../util/normalize');
exports.b1_q10 = async () => {
    try {
        let gulfRegionCountries = [
            'bahrain', 'kuwait', 'oman', 'qatar', 'saudi arabia', 'united arab emirates'
        ];
    
        const countries = await normalizedCountries();
    
    
        const gCountries = countries.filter(x => gulfRegionCountries.indexOf(x.country) > -1);
    
    
        let highest = {
            country: '',
            value: 0
        };
    
        gCountries.forEach(gCountry =>{
            gCountry.years.forEach(year =>{
                if(year.year === 2019){
                    if(Number(year.healthyLifeExpectencyAtBirth.female) > Number(highest.value)){
                        highest.country = gCountry.country;
                        highest.value = Number(year.healthyLifeExpectencyAtBirth.female);
                    }
                }
    
            })
        });
    
        return highest;
    } catch (err) {
        console.log(err);
        return null;
    }
}