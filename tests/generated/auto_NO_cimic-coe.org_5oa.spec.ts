import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cimic-coe.org_5oa', ['https://www.cimic-coe.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
