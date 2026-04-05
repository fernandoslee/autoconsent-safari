import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_imlive.com_ses', ['https://imlive.com/webcam-girls/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
