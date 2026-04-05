import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_palaisgalliera.paris.fr_e5t', ['https://www.palaisgalliera.paris.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
