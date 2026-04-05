import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reglementation-environnement.com_1c4', ['https://www.reglementation-environnement.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
