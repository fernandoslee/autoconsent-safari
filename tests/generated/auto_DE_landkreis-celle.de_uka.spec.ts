import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-celle.de_uka', ['https://www.landkreis-celle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
