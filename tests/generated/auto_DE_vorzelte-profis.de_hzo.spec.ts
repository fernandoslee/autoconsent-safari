import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vorzelte-profis.de_hzo', ['https://www.vorzelte-profis.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
