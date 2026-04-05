import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simpleproducts.de_3oa', ['https://simpleproducts.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
