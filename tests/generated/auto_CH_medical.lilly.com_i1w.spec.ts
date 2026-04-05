import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medical.lilly.com_i1w', ['https://medical.lilly.com/us/products/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
