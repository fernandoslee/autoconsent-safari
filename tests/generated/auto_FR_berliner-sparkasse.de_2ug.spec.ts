import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_berliner-sparkasse.de_2ug', ['https://www.berliner-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
