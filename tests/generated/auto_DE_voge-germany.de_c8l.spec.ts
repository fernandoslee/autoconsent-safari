import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_voge-germany.de_c8l', ['https://www.voge-germany.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
