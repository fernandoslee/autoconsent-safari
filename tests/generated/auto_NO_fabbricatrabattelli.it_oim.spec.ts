import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fabbricatrabattelli.it_oim', ['https://www.fabbricatrabattelli.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
