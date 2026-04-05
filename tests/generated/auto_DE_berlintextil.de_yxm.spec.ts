import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlintextil.de_yxm', ['https://berlintextil.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
