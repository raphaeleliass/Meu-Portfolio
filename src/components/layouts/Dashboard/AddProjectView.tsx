import React from "react";

export default function AddProjectView() {
  return (
    <div className="flex h-full w-full flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">Add Project</h1>
      <div className="flex max-w-2xl flex-col gap-4">
        <div className="h-12 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        <div className="h-12 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        <div className="h-32 w-full rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
        <div className="h-12 w-32 rounded-lg bg-gray-100 dark:bg-neutral-800"></div>
      </div>
    </div>
  );
}
