import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hermann-sr.de_ap9', ['https://www.hermann-sr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
