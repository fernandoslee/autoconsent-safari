import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_koehler.officeprofi.ch_p3e', ['https://koehler.officeprofi.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
