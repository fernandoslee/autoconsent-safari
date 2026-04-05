import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zap.officeprofi.ch_zwh', ['https://zap.officeprofi.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
