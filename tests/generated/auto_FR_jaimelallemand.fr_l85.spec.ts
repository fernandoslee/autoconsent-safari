import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jaimelallemand.fr_l85', ['https://www.jaimelallemand.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
