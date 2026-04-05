import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_new-energie.de_d3u', ['https://www.new-energie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
