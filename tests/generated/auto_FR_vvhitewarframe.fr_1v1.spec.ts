import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vvhitewarframe.fr_1v1', ['https://vvhitewarframe.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
