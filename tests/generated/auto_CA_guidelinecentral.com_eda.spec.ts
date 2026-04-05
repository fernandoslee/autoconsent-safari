import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_guidelinecentral.com_eda', ['https://www.guidelinecentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
