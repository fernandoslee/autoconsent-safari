import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_padredefamilia.com_239', ['https://padredefamilia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
