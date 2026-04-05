import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_autoteiledirekt.de_s6h', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
