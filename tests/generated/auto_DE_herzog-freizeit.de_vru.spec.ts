import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_herzog-freizeit.de_vru', ['https://herzog-freizeit.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
