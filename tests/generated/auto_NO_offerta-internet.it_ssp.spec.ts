import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_offerta-internet.it_ssp', ['https://offerta-internet.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
