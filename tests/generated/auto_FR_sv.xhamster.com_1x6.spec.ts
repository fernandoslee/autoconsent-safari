import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sv.xhamster.com_1x6', ['https://sv.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
