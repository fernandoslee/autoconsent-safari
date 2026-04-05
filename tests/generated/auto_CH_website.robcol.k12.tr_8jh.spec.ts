import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_website.robcol.k12.tr_8jh', ['https://website.robcol.k12.tr/en/home-page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
