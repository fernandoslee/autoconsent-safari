import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lueftungsmarkt.de_eq7', ['https://www.lueftungsmarkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
