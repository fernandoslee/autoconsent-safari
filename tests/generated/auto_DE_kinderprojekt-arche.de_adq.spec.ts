import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kinderprojekt-arche.de_adq', ['https://www.kinderprojekt-arche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
