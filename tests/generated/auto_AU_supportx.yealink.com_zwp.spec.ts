import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_supportx.yealink.com_zwp', ['https://support.yealink.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
