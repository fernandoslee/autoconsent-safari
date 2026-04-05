import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_topping.store_jnz', ['https://www.topping.store/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
