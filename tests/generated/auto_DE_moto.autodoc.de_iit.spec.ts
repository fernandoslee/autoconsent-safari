import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_moto.autodoc.de_iit', ['https://moto.autodoc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
