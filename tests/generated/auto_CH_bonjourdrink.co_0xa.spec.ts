import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bonjourdrink.co_0xa', ['https://bonjourdrink.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
