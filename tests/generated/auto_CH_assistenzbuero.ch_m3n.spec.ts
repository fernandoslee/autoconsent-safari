import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_assistenzbuero.ch_m3n', ['https://www.assistenzbuero.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
