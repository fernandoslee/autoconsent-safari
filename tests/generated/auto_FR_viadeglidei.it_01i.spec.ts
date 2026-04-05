import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viadeglidei.it_01i', ['https://www.viadeglidei.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
