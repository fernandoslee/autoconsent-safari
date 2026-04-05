import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_survivinginfidelity.com_ipl', ['https://www.survivinginfidelity.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
