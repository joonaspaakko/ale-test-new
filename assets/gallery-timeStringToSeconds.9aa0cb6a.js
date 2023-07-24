var timeStringToSeconds = {
  methods: {
    timeStringToSeconds: function(string) {
      if (string && string.match(/\d/)) {
        const hasMinutes = string.match(/[0-9]( ?)+(m|min|分)/);
        const numbers = string.match(/\d+/g);
        const v = {};
        const hoursToSec = function(n) {
          return +n * 60 * 60;
        };
        const minsToSec = function(n) {
          return +n * 60;
        };
        if (numbers.length === 2) {
          v.h = numbers[0];
          v.m = numbers[1];
          v.numbers = hoursToSec(v.h) + minsToSec(v.m);
        } else if (!hasMinutes) {
          v.h = numbers[0];
          v.numbers = hoursToSec(v.h);
        } else {
          v.m = numbers[0];
          v.numbers = minsToSec(v.m);
        }
        return v.numbers;
      } else {
        return 0;
      }
    }
  }
};
export { timeStringToSeconds as t };
//# sourceMappingURL=gallery-timeStringToSeconds.9aa0cb6a.js.map
