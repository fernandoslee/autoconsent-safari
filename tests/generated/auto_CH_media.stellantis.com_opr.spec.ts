import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_media.stellantis.com_opr', ['https://www.media.stellantis.com/em-en/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
