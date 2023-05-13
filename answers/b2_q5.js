const {normalizedCountries} = require('../util/normalize');

exports.b2_q5 = async () => {
    const countries = await normalizedCountries();

    return countries;
}
