import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cnnbrasil.com.br_udd', ['https://www.cnnbrasil.com.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
