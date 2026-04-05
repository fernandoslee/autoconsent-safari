import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rst-versand.de_kk0', ['https://www.rst-versand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
