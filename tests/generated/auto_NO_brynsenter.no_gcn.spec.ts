import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_brynsenter.no_gcn', ['https://www.brynsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
