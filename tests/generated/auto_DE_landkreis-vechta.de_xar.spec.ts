import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landkreis-vechta.de_xar', ['https://www.landkreis-vechta.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
