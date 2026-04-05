import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine.new-energie.de_87o', ['https://meine.new-energie.de/portal/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
