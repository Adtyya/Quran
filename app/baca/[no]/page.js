export async function generateStaticParams() {
  const surahNumber = Array.from({ length: 114 }, (_, index) => {
    return {
      no: `${index + 1}`,
    };
  });
  return surahNumber;
}

export default function ReadSurah({ params }) {
  return <div>Halaman detail surah</div>;
}
