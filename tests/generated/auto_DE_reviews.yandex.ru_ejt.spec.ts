import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_reviews.yandex.ru_ejt', ['https://reviews.yandex.ru/ugcpub/cabinet'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
