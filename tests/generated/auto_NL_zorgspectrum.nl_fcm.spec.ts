import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgspectrum.nl_fcm', ['https://www.zorgspectrum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
