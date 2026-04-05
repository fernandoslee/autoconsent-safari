import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_goldsprintshop.com_zb8', ['https://www.goldsprintshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
