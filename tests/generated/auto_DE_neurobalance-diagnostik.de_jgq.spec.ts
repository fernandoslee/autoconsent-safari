import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_neurobalance-diagnostik.de_jgq', ['https://www.neurobalance-diagnostik.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
