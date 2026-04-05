import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scriptslug.com_jxh', ['https://www.scriptslug.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
