import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_audioledcar.com_xti', ['https://www.audioledcar.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
