import Container from "@/components/container";
import Card from "@/components/box/Card";
import Paragraph from "@/components/typography/Paragraph";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://equran.id/api/v2/surat");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Home() {
  const list = await getData();

  return (
    <div className="w-full h-full min-h-screen bg-slate-800 pb-14 px-3.5 lg:px-0">
      <Container>
        <div className="py-2.5">
          <div
            id="start"
            className="w-full flex justify-center bg-slate-900 py-5 rounded"
          >
            <h1 className="text-gray-100 text-center text-5xl leading-tight">
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
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3">
          {list?.data?.map((item, index) => {
            return (
              <Link key={index} href={`/baca/${index + 1}`}>
                <Card className="space-y-1.5">
                  <Paragraph className="font-medium">
                    {index + 1}. {item?.namaLatin} - {item?.arti}
                  </Paragraph>
                  <div className="flex justify-center items-end flex-col">
                    <Paragraph className="!text-4xl">{item?.nama}</Paragraph>
                  </div>
                  <Paragraph>
                    {item?.jumlahAyat} ayat - {item?.tempatTurun}
                  </Paragraph>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
