import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_reinfoquebec.ca_4tm', ['https://reinfoquebec.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
