import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_profiles.auckland.ac.nz_5tb', ['https://profiles.auckland.ac.nz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
