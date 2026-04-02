import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca-en.nothing.tech_ktq', ['https://ca-en.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
