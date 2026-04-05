import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_akvarellmuseet.org_2ah', ['https://www.akvarellmuseet.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
