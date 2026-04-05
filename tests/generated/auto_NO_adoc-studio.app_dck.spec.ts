import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adoc-studio.app_dck', ['https://www.adoc-studio.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
