import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_laksevagsenter.no_u7n', ['https://www.laksevagsenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
