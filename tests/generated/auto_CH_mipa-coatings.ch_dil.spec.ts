import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mipa-coatings.ch_dil', ['https://www.mipa-coatings.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
