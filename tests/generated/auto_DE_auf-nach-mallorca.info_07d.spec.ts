import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auf-nach-mallorca.info_07d', ['https://www.auf-nach-mallorca.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
