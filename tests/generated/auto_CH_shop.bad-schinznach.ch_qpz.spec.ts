import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shop.bad-schinznach.ch_qpz', ['https://shop.bad-schinznach.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
