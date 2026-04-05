import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_braintumourresearch.org_izj', ['https://braintumourresearch.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
