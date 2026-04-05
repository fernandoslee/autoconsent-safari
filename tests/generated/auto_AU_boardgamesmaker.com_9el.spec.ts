import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_boardgamesmaker.com_9el', ['https://www.boardgamesmaker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
