import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_softwarepatternslexicon.com_0wm', ['https://softwarepatternslexicon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
