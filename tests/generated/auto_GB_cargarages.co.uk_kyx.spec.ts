import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cargarages.co.uk_kyx', ['https://www.cargarages.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
