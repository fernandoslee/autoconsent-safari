import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_global-ecosystems.org_etk', ['https://global-ecosystems.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
