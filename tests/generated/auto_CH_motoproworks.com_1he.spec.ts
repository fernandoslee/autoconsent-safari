import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_motoproworks.com_1he', ['https://www.motoproworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
