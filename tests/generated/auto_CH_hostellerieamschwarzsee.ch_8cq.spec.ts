import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hostellerieamschwarzsee.ch_8cq', ['https://www.hostellerieamschwarzsee.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
