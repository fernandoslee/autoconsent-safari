import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digital.diplo.de_t6i', ['https://digital.diplo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
