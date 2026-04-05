import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_profiles.sussex.ac.uk_yde', ['https://profiles.sussex.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
