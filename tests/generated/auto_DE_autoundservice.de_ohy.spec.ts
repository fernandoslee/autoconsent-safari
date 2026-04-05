import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autoundservice.de_ohy', ['https://www.autoundservice.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
