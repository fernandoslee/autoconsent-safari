import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_steuernsteuern.de_tsx', ['https://www.steuernsteuern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
