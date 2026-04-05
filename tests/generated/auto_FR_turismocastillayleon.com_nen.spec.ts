import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_turismocastillayleon.com_nen', ['https://www.turismocastillayleon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
