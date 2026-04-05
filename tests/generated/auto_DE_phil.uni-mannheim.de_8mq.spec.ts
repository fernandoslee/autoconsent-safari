import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phil.uni-mannheim.de_8mq', ['https://www.phil.uni-mannheim.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
