import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_garagentorverkauf.de_tkh', ['https://garagentorverkauf.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
