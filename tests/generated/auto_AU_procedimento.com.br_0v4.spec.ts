import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_procedimento.com.br_0v4', ['https://procedimento.com.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
