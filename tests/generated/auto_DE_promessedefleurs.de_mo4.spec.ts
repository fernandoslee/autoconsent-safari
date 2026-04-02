import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_promessedefleurs.de_mo4', ['https://www.promessedefleurs.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
