import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-automobile-stuttgart.de_mx0', ['https://www.volkswagen-automobile-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
