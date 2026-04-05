import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_visitbusan.net_5m5', ['https://www.visitbusan.net/en/index.do'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
