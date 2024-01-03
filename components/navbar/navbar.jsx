import Container from "../container";
import Paragraph from "../typography/Paragraph";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <Container>
        <div className="w-full flex items-center justify-between py-3.5">
          <div>
            <h1 className="text-4xl font-bold text-gray-100">EQuran</h1>
          </div>
          <div className="flex space-x-5">
            <Paragraph>Kumpulan Doa</Paragraph>
            <Paragraph>Tentang Web Ini</Paragraph>
          </div>
        </div>
      </Container>
    </nav>
  );
}
