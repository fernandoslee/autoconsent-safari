import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rykkinnsenter.no_n1i', ['https://www.rykkinnsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
