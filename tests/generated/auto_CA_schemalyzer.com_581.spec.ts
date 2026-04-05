import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_schemalyzer.com_581', ['https://www.schemalyzer.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
