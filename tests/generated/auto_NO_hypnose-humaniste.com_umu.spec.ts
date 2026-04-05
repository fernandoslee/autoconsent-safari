import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hypnose-humaniste.com_umu', ['https://www.hypnose-humaniste.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
