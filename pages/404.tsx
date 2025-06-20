import Images from "../public/assets/Images";
import { useRouter } from "next/router";


export default function NoPage() {
  const router = useRouter();
  return (
    <>
      <div className="noPage"
        onClick={() => router.push("/")}
      >
        <img src={Images.NOPage} alt="" />
      </div>
    </>
  );
}
