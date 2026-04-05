import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bourdelle.paris.fr_33w', ['https://www.bourdelle.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
