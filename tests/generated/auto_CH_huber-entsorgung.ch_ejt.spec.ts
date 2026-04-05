import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_huber-entsorgung.ch_ejt', ['https://www.huber-entsorgung.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
