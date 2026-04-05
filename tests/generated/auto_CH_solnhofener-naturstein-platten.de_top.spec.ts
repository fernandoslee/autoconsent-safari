import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_solnhofener-naturstein-platten.de_top', ['https://www.solnhofener-naturstein-platten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
