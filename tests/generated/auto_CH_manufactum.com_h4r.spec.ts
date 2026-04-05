import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manufactum.com_h4r', ['https://www.manufactum.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
