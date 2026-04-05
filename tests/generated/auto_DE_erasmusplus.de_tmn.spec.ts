import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_erasmusplus.de_tmn', ['https://www.erasmusplus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
