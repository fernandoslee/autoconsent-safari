import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pickawood.com_f0z', ['https://www.pickawood.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
