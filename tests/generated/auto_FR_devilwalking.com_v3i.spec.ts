import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_devilwalking.com_v3i', ['https://devilwalking.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
