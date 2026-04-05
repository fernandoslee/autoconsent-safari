import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sign.dropbox.com_xrx', ['https://sign.dropbox.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
