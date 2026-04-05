import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsche-eiche.de_7am', ['https://www.deutsche-eiche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
