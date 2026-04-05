import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_starbike.com_w8r', ['https://www.starbike.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
