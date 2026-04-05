import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_willbe-invest.com_h1o', ['https://willbe-invest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
