import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ucuenca.edu.ec_0gg', ['https://www.ucuenca.edu.ec/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
