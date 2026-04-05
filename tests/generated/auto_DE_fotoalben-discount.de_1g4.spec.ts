import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fotoalben-discount.de_1g4', ['https://www.fotoalben-discount.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
