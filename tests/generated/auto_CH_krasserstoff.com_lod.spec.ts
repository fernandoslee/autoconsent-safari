import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_krasserstoff.com_lod', ['https://krasserstoff.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
