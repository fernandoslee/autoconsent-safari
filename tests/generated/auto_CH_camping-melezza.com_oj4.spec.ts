import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camping-melezza.com_oj4', ['https://www.camping-melezza.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
