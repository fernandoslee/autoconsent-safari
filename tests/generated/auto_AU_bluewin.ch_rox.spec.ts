import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bluewin.ch_rox', ['https://www.bluewin.ch/de/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
