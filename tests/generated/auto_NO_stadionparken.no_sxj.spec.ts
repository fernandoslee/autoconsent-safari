import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_stadionparken.no_sxj', ['https://www.stadionparken.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
