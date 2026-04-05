import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_criollo-chocolatier.com_2ne', ['https://www.criollo-chocolatier.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
