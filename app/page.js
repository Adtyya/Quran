import Container from "@/components/container";
import Paragraph from "@/components/typography/Paragraph";

export default function Home() {
  return (
    <div className="w-full h-full bg-slate-800">
      <Container>
        <div className="py-2.5">
          <div
            id="start"
            className="w-full flex justify-center bg-slate-900 py-2.5"
          >
            <h1 className="text-gray-100 text-4xl">
              بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </h1>
          </div>
          <div id="search" className="w-full mt-4">
            <input
              type="search"
              placeholder="👉 Cari surat disini"
              className="w-full focus:outline-none p-1.5 border border-transparent rounded text-gray-100 focus:border-gray-100 bg-slate-700"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
