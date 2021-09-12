import Link from 'next/link';
import {
  useContext,
  useEffect,
  useState,
  useReducer,
  useMemo,
  useCallback,
  useRef,
} from 'react';

export const getStaticProps = async () => {
  const fs = require('fs');
  const filenames = fs.readdirSync('pages'); //ファイル名を取得
  const paths = filenames
    .map((filename) => {
      const path = filename.replace('.jsx', '').replace('.tsx', '');
      return path;
    })
    .filter((path) => path !== 'index' && path !== '_app' && path !== 'api');

  return {
    props: {
      paths,
    },
  };
};

export default function Home({ paths }) {
  return (
    <div>
      <h1>Lesson React Hooks</h1>
      <ul>
        {paths.map((path) => (
          <li key={path}>
            <Link href={`/${path}`}>
              <a>{path}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          text-decoration: underline;
          padding: 2px;
        }
      `}</style>
    </div>
  );
}
