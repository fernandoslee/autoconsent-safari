import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_stantonchase.com_6rn', ['https://www.stantonchase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
