import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_landessportbund-hessen.de_pkx', ['https://www.landessportbund-hessen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
