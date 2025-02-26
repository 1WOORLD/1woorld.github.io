export default function SurahCard({ name, number }) {
  return (
    <div className="surah-card">
      <h3>{name}</h3>
      <p>رقم السورة: {number}</p>
    </div>
  );
}
