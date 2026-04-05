import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aerzte-markt.de_z0k', ['https://www.aerzte-markt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
