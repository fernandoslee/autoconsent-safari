import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lightroomqueen.com_sib', ['https://www.lightroomqueen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
