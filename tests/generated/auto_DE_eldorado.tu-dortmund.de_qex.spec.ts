import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eldorado.tu-dortmund.de_qex', ['https://eldorado.tu-dortmund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
