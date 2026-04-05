import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_laborladen.de_77v', ['https://www.laborladen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
