import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_metropoolregioamsterdam.nl_6wq', ['https://www.metropoolregioamsterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
