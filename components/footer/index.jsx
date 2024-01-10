import Paragraph from "../typography/Paragraph";

export default function Footer() {
  return (
    <footer className="w-full h-max py-2.5 flex items-center justify-center fixed bottom-0 z-10 bg-slate-900">
      <Paragraph className="font-semibold">
        &copy; {new Date().getFullYear()} - Made by Aditya
      </Paragraph>
    </footer>
  );
}
