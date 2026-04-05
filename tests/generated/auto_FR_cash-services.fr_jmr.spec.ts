import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cash-services.fr_jmr', ['https://www.cash-services.fr/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
