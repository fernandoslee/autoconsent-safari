import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_linztourismus.at_yeo', ['https://www.linztourismus.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
