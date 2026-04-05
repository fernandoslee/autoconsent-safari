import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freuler-shop.ch_4ev', ['https://www.freuler-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
