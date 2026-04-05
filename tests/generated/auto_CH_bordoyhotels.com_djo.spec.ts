import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bordoyhotels.com_djo', ['https://www.bordoyhotels.com/es/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
