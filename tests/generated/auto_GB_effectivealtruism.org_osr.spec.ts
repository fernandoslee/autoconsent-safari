import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_effectivealtruism.org_osr', ['https://www.effectivealtruism.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
