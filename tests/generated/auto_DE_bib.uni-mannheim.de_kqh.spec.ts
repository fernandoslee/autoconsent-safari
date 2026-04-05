import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bib.uni-mannheim.de_kqh', ['https://www.bib.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
