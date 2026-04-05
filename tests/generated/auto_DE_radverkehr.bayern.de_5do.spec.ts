import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_radverkehr.bayern.de_5do', ['https://www.radverkehr.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
