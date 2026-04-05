import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ktm-bikes-online.at_alb', ['https://www.ktm-bikes-online.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
