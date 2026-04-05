import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_uppsalahem.se_69y', ['https://www.uppsalahem.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
