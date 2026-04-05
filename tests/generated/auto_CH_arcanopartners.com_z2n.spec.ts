import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arcanopartners.com_z2n', ['https://www.arcanopartners.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
