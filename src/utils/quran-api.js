export async function getQuran() {
  const res = await fetch('https://api.alquran.cloud/v1/quran/ar.alafasy');
  return res.json();
}
