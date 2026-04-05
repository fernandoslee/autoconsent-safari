import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wallsauce.com_yi3', ['https://www.wallsauce.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
