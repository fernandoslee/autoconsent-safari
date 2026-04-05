import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_endocardia.ch_x83', ['https://www.endocardia.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
