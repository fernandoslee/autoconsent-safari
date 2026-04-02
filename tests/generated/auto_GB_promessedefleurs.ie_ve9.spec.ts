import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_promessedefleurs.ie_ve9', ['https://www.promessedefleurs.ie/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
