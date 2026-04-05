import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grimaldi-lines.com_30g', ['https://www.grimaldi-lines.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
