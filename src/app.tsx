import { AttendeeList } from "./components/attenndee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="flex flex-col gap-5 max-w-[1216px] mx-auto py-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
