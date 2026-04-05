import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zadkine.paris.fr_ksu', ['https://www.zadkine.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
