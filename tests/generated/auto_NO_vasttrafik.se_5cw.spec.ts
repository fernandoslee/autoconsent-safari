import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vasttrafik.se_5cw', ['https://www.vasttrafik.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
