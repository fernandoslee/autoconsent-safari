import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_abarth.com_ot1', ['https://www.abarth.com/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
