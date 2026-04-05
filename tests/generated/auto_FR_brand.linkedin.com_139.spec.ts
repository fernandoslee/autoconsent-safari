import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_brand.linkedin.com_139', ['https://brand.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
