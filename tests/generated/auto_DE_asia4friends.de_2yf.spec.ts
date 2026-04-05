import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_asia4friends.de_2yf', ['https://asia4friends.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
