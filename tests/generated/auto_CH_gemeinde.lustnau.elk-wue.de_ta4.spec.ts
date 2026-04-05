import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gemeinde.lustnau.elk-wue.de_ta4', ['https://www.gemeinde.lustnau.elk-wue.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
