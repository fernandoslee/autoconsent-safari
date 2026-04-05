import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_briefmarken-versand-welt.de_x9s', ['https://www.briefmarken-versand-welt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
