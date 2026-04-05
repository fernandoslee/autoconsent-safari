import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirchenkreis-steglitz.de_3ip', ['https://www.kirchenkreis-steglitz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
