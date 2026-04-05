import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_le-code-dekra.fr_i1a', ['https://www.le-code-dekra.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
