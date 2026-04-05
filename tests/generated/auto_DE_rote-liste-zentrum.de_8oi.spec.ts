import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rote-liste-zentrum.de_8oi', ['https://www.rote-liste-zentrum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
