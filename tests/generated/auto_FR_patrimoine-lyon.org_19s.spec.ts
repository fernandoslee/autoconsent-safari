import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_patrimoine-lyon.org_19s', ['https://www.patrimoine-lyon.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
