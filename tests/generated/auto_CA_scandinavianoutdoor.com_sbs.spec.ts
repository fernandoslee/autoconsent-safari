import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_scandinavianoutdoor.com_sbs', ['https://scandinavianoutdoor.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
