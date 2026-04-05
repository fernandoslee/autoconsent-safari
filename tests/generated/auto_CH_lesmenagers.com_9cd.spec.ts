import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lesmenagers.com_9cd', ['https://www.lesmenagers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
