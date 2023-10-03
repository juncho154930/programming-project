export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-2xl font-bold">
          How to get started with your first project
        </h1>
        <ul className="list-decimal">
          <li>
            First, make sure you have npm and node installed
            <br />
            <a
              href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
            </a>
            <a
              href="https://nodejs.org/en/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://nodejs.org/en/download
            </a>
          </li>
          <li>
            Install{" "}
            <a
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              VSCode
            </a>
          </li>
          <li>
            Open VSCode and open a terminal. Navigate to the directory you want
            to keep your projects
          </li>
          <li>
            Make an account with <a href="https://github.com/">Github</a> if you
            don&apos;t already have one
          </li>
          <li>
            Then pull this{" "}
            <a
              href="https://github.com/juncho154930/programming-project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </li>
          <li>
            Make sure you are in the project directory with command `pwd`. If
            you are not in the directory you can navigate to it with command `cd
            project-path`
          </li>
          <li>To install the project dependencies, use command `npm i`</li>
          <li>
            Once everything is installed you can use command `npm run dev` to
            get your project running in localhost
          </li>
          <li>
            Now go to your browser and type in{" "}
            <a href="http://localhost:3000/">http://localhost:3000/</a>. You
            should now see your project running
          </li>
          <li>
            For this project we are going to get started with{" "}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
            ,{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ReactJS
            </a>
            ,{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tailwindcss
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
