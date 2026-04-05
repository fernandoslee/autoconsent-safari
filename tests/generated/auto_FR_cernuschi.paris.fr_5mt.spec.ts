import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cernuschi.paris.fr_5mt', ['https://www.cernuschi.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
