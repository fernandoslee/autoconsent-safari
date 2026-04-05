import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stadtkirchengemeinde-esslingen.de_zck', ['https://www.stadtkirchengemeinde-esslingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
