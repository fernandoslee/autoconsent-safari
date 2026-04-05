import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lycee-polyvalent-cfa-saint-paul.com_6hv', ['https://www.lycee-polyvalent-cfa-saint-paul.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
