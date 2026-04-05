import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_iminfermentation.it_j3n', ['https://www.iminfermentation.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
