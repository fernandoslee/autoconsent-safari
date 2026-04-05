import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_milanomalpensa-airport.com_453', ['https://www.milanomalpensa-airport.com/it'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
