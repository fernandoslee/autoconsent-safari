import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kleingarten-bund.de_6b1', ['https://kleingarten-bund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
