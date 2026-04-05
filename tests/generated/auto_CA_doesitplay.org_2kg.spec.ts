import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_doesitplay.org_2kg', ['https://www.doesitplay.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
