import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_intl.nothing.tech_3hy', ['https://intl.nothing.tech/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
