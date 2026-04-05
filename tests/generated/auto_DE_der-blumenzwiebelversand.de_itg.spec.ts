import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-blumenzwiebelversand.de_itg', ['https://www.der-blumenzwiebelversand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
