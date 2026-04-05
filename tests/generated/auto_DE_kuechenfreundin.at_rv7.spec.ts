import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kuechenfreundin.at_rv7', ['https://kuechenfreundin.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
