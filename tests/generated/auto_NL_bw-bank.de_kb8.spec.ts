import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bw-bank.de_kb8', ['https://www.bw-bank.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
