import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gastroticino.ch_yih', ['https://gastroticino.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
