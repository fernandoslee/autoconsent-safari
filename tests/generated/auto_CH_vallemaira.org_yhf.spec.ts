import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vallemaira.org_yhf', ['https://www.vallemaira.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
