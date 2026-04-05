import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_simons-ratschlag.de_020', ['https://simons-ratschlag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
