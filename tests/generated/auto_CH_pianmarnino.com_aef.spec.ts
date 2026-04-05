import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pianmarnino.com_aef', ['https://www.pianmarnino.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
