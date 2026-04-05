import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_profiles.sydney.edu.au_xxj', ['https://profiles.sydney.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
