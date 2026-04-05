import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adelineklam.com_eod', ['https://adelineklam.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
