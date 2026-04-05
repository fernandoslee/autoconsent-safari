import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_webacappella.com_nmx', ['https://www.webacappella.com/en/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
