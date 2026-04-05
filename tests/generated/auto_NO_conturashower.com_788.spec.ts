import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_conturashower.com_788', ['https://conturashower.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
