import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airbnb.com.br_egx', ['https://www.airbnb.com.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
