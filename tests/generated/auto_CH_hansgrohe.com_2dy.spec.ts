import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hansgrohe.com_2dy', ['https://www.hansgrohe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
