import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wim.uni-mannheim.de_9ut', ['https://www.wim.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
