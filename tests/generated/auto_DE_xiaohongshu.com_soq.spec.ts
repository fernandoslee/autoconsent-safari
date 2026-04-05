import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_xiaohongshu.com_soq', ['https://www.xiaohongshu.com/explore'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
