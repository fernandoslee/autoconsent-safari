import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jura.uni-mannheim.de_x6y', ['https://www.jura.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
