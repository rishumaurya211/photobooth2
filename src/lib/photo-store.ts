// Tiny in-memory + sessionStorage store for captured photos.
const KEY = "maison-photos";

export function savePhotos(photos: string[]) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(photos));
  } catch {}
}

export function loadPhotos(): string[] {
  try {
    const v = sessionStorage.getItem(KEY);
    return v ? (JSON.parse(v) as string[]) : [];
  } catch {
    return [];
  }
}

export function clearPhotos() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {}
}