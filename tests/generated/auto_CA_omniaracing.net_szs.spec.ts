import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_omniaracing.net_szs', ['https://www.omniaracing.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
