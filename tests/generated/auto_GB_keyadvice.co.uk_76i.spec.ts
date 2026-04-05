import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_keyadvice.co.uk_76i', ['https://www.keyadvice.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
