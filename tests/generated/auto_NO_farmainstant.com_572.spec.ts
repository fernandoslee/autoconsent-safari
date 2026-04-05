import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_farmainstant.com_572', ['https://www.farmainstant.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
