import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bundesverband-gutachter.de_j7h', ['https://www.bundesverband-gutachter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
