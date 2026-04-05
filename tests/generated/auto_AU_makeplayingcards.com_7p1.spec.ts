import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_makeplayingcards.com_7p1', ['https://www.makeplayingcards.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
