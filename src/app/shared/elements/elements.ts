export function getLocaleFromLocalStorage(): number {
  const localStorageValue = localStorage.getItem('locale');
  return localStorageValue ? JSON.parse(localStorageValue) : 0;
}


export function getDistanceCenterToPoint(cLat, pLat, cLon, pLon): any {
  const R = 6371e3; // metres
  const φ1 = cLat * Math.PI / 180; // φ, λ in radians
  const φ2 = pLat * Math.PI / 180;
  const Δφ = (pLat - cLat) * Math.PI / 180;
  const Δλ = (pLon - cLon) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));


  // in metres
  return R * c
}
