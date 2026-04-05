import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_profiles.lbl.gov_m0y', ['https://profiles.lbl.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
