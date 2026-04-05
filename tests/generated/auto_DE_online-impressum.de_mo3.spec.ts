import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_online-impressum.de_mo3', ['https://online-impressum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
