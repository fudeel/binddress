export function getLocaleFromLocalStorage(): number {
  const localStorageValue = localStorage.getItem('locale');
  return localStorageValue ? JSON.parse(localStorageValue) : 0;
}
