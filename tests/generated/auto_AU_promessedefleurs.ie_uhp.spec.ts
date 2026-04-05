import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_promessedefleurs.ie_uhp', ['https://www.promessedefleurs.ie/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
