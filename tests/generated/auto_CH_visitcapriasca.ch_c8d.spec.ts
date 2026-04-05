import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_visitcapriasca.ch_c8d', ['https://www.visitcapriasca.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
