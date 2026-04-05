import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lyon-partdieu.com_s3r', ['https://www.lyon-partdieu.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
