import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_heldenschmiede.eu_yu6', ['https://www.heldenschmiede.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
