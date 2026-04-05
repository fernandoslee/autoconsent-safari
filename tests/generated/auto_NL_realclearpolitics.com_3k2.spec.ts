import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_realclearpolitics.com_3k2', ['https://www.realclearpolitics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
