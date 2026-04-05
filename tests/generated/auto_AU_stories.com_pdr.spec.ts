import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_stories.com_pdr', ['https://www.stories.com/en-ww/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
