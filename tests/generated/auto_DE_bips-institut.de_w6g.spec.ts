import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bips-institut.de_w6g', ['https://www.bips-institut.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
