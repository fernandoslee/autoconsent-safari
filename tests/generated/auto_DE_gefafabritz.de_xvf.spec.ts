import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gefafabritz.de_xvf', ['https://www.gefafabritz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
