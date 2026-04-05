import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evangelisch-in-potsdam.de_o3n', ['https://www.evangelisch-in-potsdam.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
