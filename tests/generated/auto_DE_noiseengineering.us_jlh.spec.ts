import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_noiseengineering.us_jlh', ['https://noiseengineering.us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
