import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vaerstetorvet.no_nse', ['https://vaerstetorvet.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
