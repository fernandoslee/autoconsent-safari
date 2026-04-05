import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sverigesnatur.org_u0c', ['https://www.sverigesnatur.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
