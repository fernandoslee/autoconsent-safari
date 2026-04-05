import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manfrotto-shop.ch_36b', ['https://www.manfrotto-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
