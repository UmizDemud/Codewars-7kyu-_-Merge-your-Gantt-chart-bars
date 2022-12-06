
const addDay = (date, no) => {
  let newFrom = new Date(date);
  newFrom.setDate(newFrom.getDate() + no);
  return newFrom.getFullYear() 
    + '-' + ((newFrom.getMonth() + 1) < 10 ? ('0' + (newFrom.getMonth() + 1)) : (newFrom.getMonth() + 1)) 
    + '-' + ((newFrom.getDate() < 10) ? ('0' + newFrom.getDate()) : (newFrom.getDate()));
}

function mergePeriods(periods) {
  const result = [];

  const start = periods.reduce((a, b) => b.from < a ? b.from : a, periods[0].from);
  const end = periods.reduce((a, b) => b.to > a ? b.to : a, periods[0].to);

  let lastTitles = periods[0].title;
  let lastStart = start;
  let titles;
  let i;

  for (i = start; i <= end; i = addDay(i, 1)) {
    titles = '';
    for (const period of periods) {
      if (i >= period.from && i <=period.to) {
        titles += period.title + '.'
      }
    }
    if (i === start) {
      lastTitles = titles;
    }
    if (titles !== lastTitles) {
      result.push({
        from: lastStart,
        to: addDay(i, -1),
        title: lastTitles,
      });
      lastTitles = titles;
      lastStart = i;
    }
  }
  result.push({
    from: lastStart,
    to: addDay(i, -1),
    title: lastTitles,
  });

  return result
    .map(item => {
      const title = item.title.split('.').sort((a,b) => a.localeCompare(b)).join(', ');
      return {
        ...item,
        title: title.substring(2),
      }
    });
}