import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_versicherung-online.net_d2z', ['https://www.versicherung-online.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
