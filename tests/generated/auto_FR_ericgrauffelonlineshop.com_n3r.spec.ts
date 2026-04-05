import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ericgrauffelonlineshop.com_n3r', ['https://ericgrauffel.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
