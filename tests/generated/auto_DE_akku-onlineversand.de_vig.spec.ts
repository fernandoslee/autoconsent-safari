import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_akku-onlineversand.de_vig', ['https://akku-onlineversand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
