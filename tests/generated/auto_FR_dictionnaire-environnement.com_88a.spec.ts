import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dictionnaire-environnement.com_88a', ['https://www.dictionnaire-environnement.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
