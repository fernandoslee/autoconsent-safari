import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wirbelsaeule-charite.de_u3c', ['https://www.wirbelsaeule-charite.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
