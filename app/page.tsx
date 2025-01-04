import DownloadsCard from "./components/downloads-n-created-users/DownloadsCard";
import CreatedUsersCard from "./components/downloads-n-created-users/CreatedUsersCard";


export default function HomeClient() {
  return (
    <div className="w-full flex flex-col justify-start h-screen bg-primaryBG gap-[12px] sm:gap-[16px] p-[12px] sm:p-[16px]">
      <div className="w-full flex flex-col gap-y-[16px] items-center">
        <DownloadsCard />
        <CreatedUsersCard />
      </div>
    </div>
  );
}
