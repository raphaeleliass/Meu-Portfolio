import { db } from "@/firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

interface projectInterface {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  repoLink: string;
  siteLink: string;
  tags: [];
}

export default function useProjects() {
  const [project, setProject] = useState<projectInterface[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);

    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectList = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        imagePath: doc.data().imagePath,
        repoLink: doc.data().repoLink,
        siteLink: doc.data().siteLink,
        tags: doc.data().tags,
      }));
      setProject(projectList);
      setLoader(false);
    });

    return () => unsubscribe();
  }, []);

  return { project, loader };
}
