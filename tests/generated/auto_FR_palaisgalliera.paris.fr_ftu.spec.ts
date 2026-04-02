import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_palaisgalliera.paris.fr_ftu', ['https://www.palaisgalliera.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
