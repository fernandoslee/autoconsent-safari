import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_saxotrader.fr_ome', ['https://www.saxotrader.fr/login?ReturnUrl=%2f'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
