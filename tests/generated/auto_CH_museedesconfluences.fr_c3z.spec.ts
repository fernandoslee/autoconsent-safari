import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_museedesconfluences.fr_c3z', ['https://museedesconfluences.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
