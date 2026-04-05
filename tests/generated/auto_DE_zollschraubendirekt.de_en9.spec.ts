import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zollschraubendirekt.de_en9', ['https://zollschraubendirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
