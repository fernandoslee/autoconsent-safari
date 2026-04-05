import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_clubwyndham.wyndhamdestinations.com_y4c', ['https://clubwyndham.wyndhamdestinations.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
