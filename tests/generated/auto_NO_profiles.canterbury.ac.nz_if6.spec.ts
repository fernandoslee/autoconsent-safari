import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_profiles.canterbury.ac.nz_if6', ['https://profiles.canterbury.ac.nz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
