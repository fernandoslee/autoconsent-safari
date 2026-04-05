import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vinjournalen.se_5ul', ['https://www.vinjournalen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
