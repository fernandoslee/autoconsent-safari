import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lucacastelli.com_p1y', ['https://lucacastelli.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
