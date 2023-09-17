const mapReportsService = (reports) => reports.filter((elt, index) => {
  if (index !== 0) {
    return true;
  }
  return false;
}).map((elt, index) => ({
  id: index,
  name: elt.key.split('/')[3],
  displayName: elt.key.split('/')[3].slice(0, -4),
}));

export { mapReportsService };
