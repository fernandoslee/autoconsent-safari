import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pt.xhamster.com_kfz', ['https://pt.xhamster.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
