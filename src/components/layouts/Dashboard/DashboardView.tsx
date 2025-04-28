import Cookie from "js-cookie";

export default function DashboardView() {
  async function test() {
    Cookie.set("key", "value", {
      expires: 7,
    });
  }

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-2 p-4">
      <h1 className="text-2xl font-bold" onClick={test}>
        Dashboard
      </h1>
      <div className="flex gap-2">
        {[...new Array(4)].map((i, idx) => (
          <div
            key={"dashboard-card-" + idx}
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          ></div>
        ))}
      </div>
      <div className="flex flex-1 gap-2">
        {[...new Array(2)].map((i, idx) => (
          <div
            key={"dashboard-content-" + idx}
            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          ></div>
        ))}
      </div>
    </div>
  );
}
