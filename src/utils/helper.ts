export const makeQuery = (
  account: string | undefined,
  start: string | undefined,
  end: string | undefined,
  unit: string | undefined,
  skip: number
): string => {
  var baseURI = 'https://eos.hyperion.eosrio.io/v2/history/get_actions';
  var noQuery = true;
  if (account) {
    baseURI += `?account=${account}`;
    noQuery = false;
  }
  if (start) {
    baseURI += noQuery ? '?' : '&';
    baseURI += 'after=' + new Date(start).toUTCString();
  }
  if (end) {
    baseURI += noQuery ? '?' : '&';
    baseURI += 'before' + new Date(end).toUTCString();
  }
  return baseURI + '&skip=' + skip;
};
