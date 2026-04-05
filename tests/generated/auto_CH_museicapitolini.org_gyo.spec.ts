import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_museicapitolini.org_gyo', ['https://www.museicapitolini.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
