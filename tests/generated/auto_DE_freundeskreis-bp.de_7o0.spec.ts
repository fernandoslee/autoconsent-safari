import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_freundeskreis-bp.de_7o0', ['https://freundeskreis-bp.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
