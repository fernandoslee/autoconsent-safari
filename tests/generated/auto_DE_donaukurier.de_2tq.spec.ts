import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_donaukurier.de_2tq', ['https://www.donaukurier.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
