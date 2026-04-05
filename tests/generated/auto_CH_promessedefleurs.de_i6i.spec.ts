import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_promessedefleurs.de_i6i', ['https://www.promessedefleurs.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
