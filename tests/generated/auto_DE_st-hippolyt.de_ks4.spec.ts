import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_st-hippolyt.de_ks4', ['https://www.st-hippolyt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
