import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_it.trip.com_9h2', ['https://it.trip.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
