import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_katiazarate.com_xbs', ['https://www.katiazarate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
