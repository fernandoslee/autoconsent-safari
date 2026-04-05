import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_protisvalor.com_i1t', ['https://www.protisvalor.com/fr/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
