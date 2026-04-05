import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vhs-freiburg.de_x19', ['https://www.vhs-freiburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
