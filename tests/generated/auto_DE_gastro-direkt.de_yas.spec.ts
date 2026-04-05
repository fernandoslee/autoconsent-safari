import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gastro-direkt.de_yas', ['https://www.gastro-direkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
