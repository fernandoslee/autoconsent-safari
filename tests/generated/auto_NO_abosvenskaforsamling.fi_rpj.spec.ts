import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_abosvenskaforsamling.fi_rpj', ['https://www.abosvenskaforsamling.fi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
