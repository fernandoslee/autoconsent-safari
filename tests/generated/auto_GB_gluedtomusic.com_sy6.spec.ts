import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gluedtomusic.com_sy6', ['https://www.gluedtomusic.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
