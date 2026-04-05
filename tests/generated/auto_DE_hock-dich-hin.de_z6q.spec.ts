import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hock-dich-hin.de_z6q', ['https://www.hock-dich-hin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
