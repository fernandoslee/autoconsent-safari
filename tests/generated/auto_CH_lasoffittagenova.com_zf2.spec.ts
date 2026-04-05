import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lasoffittagenova.com_zf2', ['https://www.lasoffittagenova.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
