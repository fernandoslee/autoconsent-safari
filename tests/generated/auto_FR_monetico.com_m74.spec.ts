import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monetico.com_m74', ['https://www.monetico.com/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
