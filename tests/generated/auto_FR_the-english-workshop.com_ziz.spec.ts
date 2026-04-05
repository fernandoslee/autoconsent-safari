import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_the-english-workshop.com_ziz', ['https://the-english-workshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
