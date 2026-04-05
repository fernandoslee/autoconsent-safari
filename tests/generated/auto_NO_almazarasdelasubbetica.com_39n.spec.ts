import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_almazarasdelasubbetica.com_39n', ['https://almazarasdelasubbetica.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
