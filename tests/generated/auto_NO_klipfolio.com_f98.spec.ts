import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klipfolio.com_f98', ['https://www.klipfolio.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
