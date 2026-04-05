import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hospitalhof.de_y7m', ['https://www.hospitalhof.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
