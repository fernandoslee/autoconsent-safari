import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ekoshoptillvaro.nl_p4r', ['https://ekoshoptillvaro.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
