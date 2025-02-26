import { getQuran } from '../utils/quran-api';

export default function QuranPage() {
  const [surahs, setSurahs] = useState([]);
  useEffect(() => {
    getQuran().then(data => setSurahs(data));
  }, []);
  return (
    <div>
      {surahs.map(surah => (
        <SurahCard key={surah.id} {...surah} />
      ))}
    </div>
  );
                  }
