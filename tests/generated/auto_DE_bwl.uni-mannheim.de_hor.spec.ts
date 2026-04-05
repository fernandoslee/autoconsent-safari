import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bwl.uni-mannheim.de_hor', ['https://www.bwl.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
