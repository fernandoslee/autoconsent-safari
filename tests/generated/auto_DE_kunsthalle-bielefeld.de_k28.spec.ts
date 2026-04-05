import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kunsthalle-bielefeld.de_k28', ['https://kunsthalle-bielefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
