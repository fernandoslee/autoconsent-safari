import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stiftskirche.de_0ga', ['https://www.stiftskirche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
