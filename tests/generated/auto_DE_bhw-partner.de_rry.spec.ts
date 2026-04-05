import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bhw-partner.de_rry', ['https://www.bhw-partner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
