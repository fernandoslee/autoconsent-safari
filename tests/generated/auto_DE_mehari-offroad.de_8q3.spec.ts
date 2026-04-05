import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mehari-offroad.de_8q3', ['https://www.mehari-offroad.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
