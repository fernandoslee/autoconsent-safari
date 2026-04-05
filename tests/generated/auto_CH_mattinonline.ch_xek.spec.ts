import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mattinonline.ch_xek', ['https://www.mattinonline.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
