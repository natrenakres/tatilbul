import { TheHeading } from '@/src/shared/components/the-heading';
import Link from 'next/link';

export function FaqScreen() {
  return (
    <>
      <TheHeading>Frequently Asked Questions</TheHeading>
      <section className='bg-white shadow rounded-lg p-6'>
        <article className='mb-4'>
          <h2 className='text-xl'>What is the purpose of the project?</h2>
          <p className='text-sm'>
            The purpose of the Tatilbul project is to provide quick and
            effective vacation options for people who cannot search the internet
            for vacations but need fast and tailored results.
          </p>
        </article>
        <hr className='border-gray-300' />
        <article className='my-4'>
          <h2 className='text-xl'>What are the features of the project?</h2>
          <div className='p-4'>
            <p>
              The project aims to offer users the best vacation options quickly
              and effortlessly from the endless world of internet choices,
              supported by artificial intelligence. To achieve this, the project
              uses an AI model, the <strong>COHERE</strong> API, to transform
              the input prompt into a structured output presented to the user.
            </p>
            <h3 className='my-4 font-bold'>Features</h3>
            <ol>
              <li>NextJs 15 and React 19</li>
              <li>Appwrite Backend</li>
              <li>Appwrite Auth and Github OAuth</li>
              <li>Feature Slice Architecture</li>
              <li>Shadcn/Ui</li>
              <li>COHERE AI Model</li>
              <li>Langchain JS</li>
            </ol>
          </div>
        </article>
        <hr className='border-gray-300' />
        <article className='my-4'>
          <h2 className='text-xl'>
            What are the installation instructions for the project?
          </h2>
          <div>
            <p>
              No installation is required for the project. Go to the{' '}
              <Link href={'/chat'}>Chat</Link> page, type an input about the
              vacation you want, and save the answer if needed, or start a new
              chat.
            </p>
          </div>
        </article>
        <hr className='border-gray-300' />
        <article className='my-4'>
          <h2 className='text-xl'>
            What are the standout features of the project?
          </h2>
          <p>
            The project is not dependent on the <b>cohere</b> model. Thanks to
            LangChain.js, it can create model-independent prompts.
          </p>
        </article>
      </section>
    </>
  );
}
