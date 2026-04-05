import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kryddlandet.se_qls', ['https://www.kryddlandet.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
