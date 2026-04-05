import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tonsberglivet.no_924', ['https://tonsberglivet.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
