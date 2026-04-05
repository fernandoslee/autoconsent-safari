import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_augotraining.com_emd', ['https://augotraining.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
