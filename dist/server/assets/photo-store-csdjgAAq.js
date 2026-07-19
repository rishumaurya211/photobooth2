const KEY = "maison-photos";
function savePhotos(photos) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(photos));
  } catch {
  }
}
function loadPhotos() {
  try {
    const v = sessionStorage.getItem(KEY);
    return v ? JSON.parse(v) : [];
  } catch {
    return [];
  }
}
export {
  loadPhotos as l,
  savePhotos as s
};
