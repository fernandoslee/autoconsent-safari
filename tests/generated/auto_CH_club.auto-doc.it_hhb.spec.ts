import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_club.auto-doc.it_hhb', ['https://club.auto-doc.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
