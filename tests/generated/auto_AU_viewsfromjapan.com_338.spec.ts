import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_viewsfromjapan.com_338', ['https://www.viewsfromjapan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
