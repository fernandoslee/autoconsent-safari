import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gelsen-net.de_uhn', ['https://www.gelsen-net.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
