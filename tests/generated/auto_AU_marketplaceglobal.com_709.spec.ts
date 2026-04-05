import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_marketplaceglobal.com_709', ['https://marketplaceglobal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
