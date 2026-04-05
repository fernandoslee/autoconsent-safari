import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vwl.uni-mannheim.de_q25', ['https://www.vwl.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
