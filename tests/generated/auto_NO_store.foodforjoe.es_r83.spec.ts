import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_store.foodforjoe.es_r83', ['https://store.foodforjoe.es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
