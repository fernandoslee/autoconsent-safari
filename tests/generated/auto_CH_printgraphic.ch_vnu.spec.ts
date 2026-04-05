import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_printgraphic.ch_vnu', ['https://www.printgraphic.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
