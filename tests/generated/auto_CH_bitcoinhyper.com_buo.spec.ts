import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitcoinhyper.com_buo', ['https://bitcoinhyper.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
