import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jnrousseau.com_oa5', ['https://www.jnrousseau.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
