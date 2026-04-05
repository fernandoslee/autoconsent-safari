import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jameshardie.com_c84', ['https://www.jameshardie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
