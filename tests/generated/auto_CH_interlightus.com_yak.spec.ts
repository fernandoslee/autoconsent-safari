import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_interlightus.com_yak', ['https://www.interlightus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
