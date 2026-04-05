import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_scalemodelshop.co.uk_8xq', ['https://www.scalemodelshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
