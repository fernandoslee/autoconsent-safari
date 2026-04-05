import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loveantiques.com_j25', ['https://www.loveantiques.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
