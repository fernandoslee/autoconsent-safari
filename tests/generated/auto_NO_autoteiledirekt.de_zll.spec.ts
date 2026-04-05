import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_autoteiledirekt.de_zll', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
