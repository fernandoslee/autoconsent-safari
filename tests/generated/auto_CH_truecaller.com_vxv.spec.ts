import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_truecaller.com_vxv', ['https://www.truecaller.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
