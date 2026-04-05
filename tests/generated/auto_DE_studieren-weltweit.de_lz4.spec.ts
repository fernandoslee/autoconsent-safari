import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_studieren-weltweit.de_lz4', ['https://www.studieren-weltweit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
