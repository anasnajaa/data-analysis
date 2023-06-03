const {normalizedCountries} = require('../util/normalize');

exports.b2_q5 = async () => {
    try {
        const countries = await normalizedCountries();

        return countries;        
    } catch (err) {
        console.log(err);
        return null;
    }
}
