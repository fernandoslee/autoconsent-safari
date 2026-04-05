import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_plastic-models-store.com_7uu', ['https://plastic-models-store.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
