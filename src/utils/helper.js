export function loadCreditCards(creditCartData, key) {
    if (localStorage.getItem(`${key}`)) {
      return JSON.parse(localStorage.getItem(`${key}`));
    }
    return creditCartData;
  }