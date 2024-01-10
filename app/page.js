import Container from "@/components/container";
import Card from "@/components/box/Card";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen bg-slate-800">
      <Container>
        <div className="py-2.5">
          <div
            id="start"
            className="w-full flex justify-center bg-slate-900 py-3.5"
          >
            <h1 className="text-gray-100 text-5xl">
              بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
            </h1>
          </div>
          <div id="search" className="w-full mt-4">
            <input
              type="search"
              placeholder="👉 Cari surat disini"
              className="w-full focus:outline-none p-1.5 border border-transparent rounded text-gray-100  bg-slate-700 focus:bg-white focus:text-gray-600 font-medium"
            />
          </div>
        </div>
        <br />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card>1</Card>
          <Card>1</Card>
          <Card>1</Card>
        </div>
      </Container>
    </div>
  );
}
