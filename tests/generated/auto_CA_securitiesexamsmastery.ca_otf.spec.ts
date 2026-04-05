import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_securitiesexamsmastery.ca_otf', ['https://securitiesexamsmastery.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
