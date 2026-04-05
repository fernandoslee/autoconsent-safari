import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kunststoffweb.de_akc', ['https://www.kunststoffweb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
