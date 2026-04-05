import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_carcept-prev.fr_35u', ['https://www.carcept-prev.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
