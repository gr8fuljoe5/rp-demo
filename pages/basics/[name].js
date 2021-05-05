import { useRouter } from "next/router";

function Name() {
  const router = useRouter();
  const { name } = router.query;
  return <div>Hello, {name}</div>;
}

export default Name;
