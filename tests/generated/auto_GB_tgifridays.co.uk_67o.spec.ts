import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tgifridays.co.uk_67o', ['https://www.tgifridays.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
