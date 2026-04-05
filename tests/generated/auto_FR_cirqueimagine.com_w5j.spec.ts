import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cirqueimagine.com_w5j', ['https://cirqueimagine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
