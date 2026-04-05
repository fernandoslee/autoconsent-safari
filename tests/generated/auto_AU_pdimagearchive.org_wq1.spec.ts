import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pdimagearchive.org_wq1', ['https://pdimagearchive.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
