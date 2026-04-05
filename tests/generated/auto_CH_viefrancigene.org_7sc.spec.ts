import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_viefrancigene.org_7sc', ['https://www.viefrancigene.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
