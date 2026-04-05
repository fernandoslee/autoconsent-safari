import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schliessanlage.de_qg7', ['https://www.schliessanlage.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
