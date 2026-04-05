import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ins-netz-gehen.de_clh', ['https://www.ins-netz-gehen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
