import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_modernatx.com_w9s', ['https://www.modernatx.com/de-CH?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
