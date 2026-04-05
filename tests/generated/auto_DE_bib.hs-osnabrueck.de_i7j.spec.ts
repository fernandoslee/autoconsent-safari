import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bib.hs-osnabrueck.de_i7j', ['https://www.bib.hs-osnabrueck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
