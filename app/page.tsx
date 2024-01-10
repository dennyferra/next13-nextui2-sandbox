import styles from "./page.module.css";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Form } from "./Form";
import Visualizer from "./graph";

export default function Home() {
  const mockGraph = {
    nodes: [
      { id: "1", label: "node1", type: "entity", title: "Hello W0rd!" },
      { id: "2", label: "node2", type: "rule" },
      { id: "3", label: "node3", type: "relation" },
      { id: "4", label: "node4", type: "attribute" },
      { id: "5", label: "node5", type: "permission" },
      { id: "6", label: "node6", type: "relation" },
    ],
    edges: [
      { from: { id: "1", type: "relation" }, to: { id: "2" } },
      { from: { id: "2", type: "entity" }, to: { id: "3" } },
      { from: { id: "3", type: "permission" }, to: { id: "6" } },
      { from: { id: "4", type: "attribute" }, to: { id: "5" } },
      { from: { id: "5", type: "rule" }, to: { id: "3" } },
    ],
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>ZOMG Hello World!</p>
      </div>

      <Card className="w-3/4 ">
        <CardHeader className="capitalize font-bold bg-neutral-700">
          To be or not to be?
        </CardHeader>
        <CardBody className="bg-neutral-900">
          <Form />
          <div className="w-full flex justify-center h-[450px]">
            <Visualizer graph={mockGraph} />
          </div>
        </CardBody>
        <CardFooter className="text-xs bg-neutral-700">
          Who do you want to be?
        </CardFooter>
      </Card>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
