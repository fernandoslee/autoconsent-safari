import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_promotionfilm.nl_uhk', ['https://www.promotionfilm.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
