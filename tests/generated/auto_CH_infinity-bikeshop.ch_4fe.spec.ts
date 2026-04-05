import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_infinity-bikeshop.ch_4fe', ['https://www.infinity-bikeshop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
