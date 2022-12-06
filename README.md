You have a Gantt chart with time period bars, each having a from and to date (colored in image). To have a better overview, you would like to merge these bars to a single bar, which outlines subperiods in one line (gray in image).

For example: You have period A, B and C as in the image. Splitting these periods in subperiods means, we search for each period in which bars change. Thus, first period would be A.from until the day before B.from (end date is always inclusive). Also, we need to know subperiods that do not contain any bars (to calculate gaps).

Gantt example

Merged periods in the image would hence be:

from 2020-02-04 to 2020-02-05 -> A
from 2020-02-06 to 2020-02-07 -> A, B
from 2020-02-08 to 2020-02-11 -> B
from 2020-02-12 to 2020-02-12 -> empty
from 2020-02-13 to 2020-02-15 -> C
Your task
Your task is calculate merged subperiods from given periods with assigned period titles. You get the periods as an array of objects having from and to date attributes (string, format 'YYYY-MM-DD'), as well as a title attribute (string).

You return the subperiods as an array of objects, also with from/to dates and merged titles (or empty if gap). Sort titles alphabetically and join them by comma+space.

example:

const periods = [ // you get this
  { from: '2019-01-01', to: '2019-01-10', title: 'B' },
  { from: '2019-01-05', to: '2019-01-15', title: 'A' }
];
const subperiods = mergePeriods(periods); // <-- your function

/*
subperiods should be: -> you return
[
  { from: '2019-01-01', to: '2019-01-04', title: 'B' },
  { from: '2019-01-05', to: '2019-01-10', title: 'A, B' },
  { from: '2019-01-11', to: '2019-01-15', title: 'A' },
]
*/
Heads-up
Periods will never be empty
Multiple periods may start / end at the same date
to dates are inclusive, so next from date is the day after
Sort titles alphabetically and join them with a comma FOLLOWED by a space.
Go through tests to get more inspiration ;)