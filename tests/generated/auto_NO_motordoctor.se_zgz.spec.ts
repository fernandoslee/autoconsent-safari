import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_motordoctor.se_zgz', ['https://www.motordoctor.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
