import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirchenbezirk-tuebingen.de_r2i', ['https://www.kirchenbezirk-tuebingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
