import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mopedrenovering.se_62f', ['https://www.mopedrenovering.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
