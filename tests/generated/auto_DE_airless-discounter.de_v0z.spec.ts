import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_airless-discounter.de_v0z', ['https://airless-discounter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
