import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_youweb.bancobpm.it_bx8', ['https://youweb.bancobpm.it/WEBHT/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
