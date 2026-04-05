import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_imlive.com_mvp', ['https://imlive.com/webcam-girls/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
