import React from "react";

export default function EditProjectView() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Edit Project</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[...new Array(4)].map((_, idx) => (
          <div
            key={`project-${idx}`}
            className="flex gap-4 rounded-lg border border-neutral-200 p-4 dark:border-neutral-700"
          >
            <div className="h-20 w-20 rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="h-8 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
              <div className="h-8 w-32 rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
