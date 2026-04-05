import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sowi.uni-mannheim.de_f6b', ['https://www.sowi.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
