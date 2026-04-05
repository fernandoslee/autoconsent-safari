import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_liberalerna.se_43p', ['https://www.liberalerna.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
