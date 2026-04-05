import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_loewenlichtspiele.de_5f8', ['https://www.loewenlichtspiele.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
