export interface Project {
  id: number;
  name: string;
  desc: string;
  stars: number;
  forks: number;
  link: string;
  contribs: number;
  langs: Array<string>;
}

export interface data {
  title: string;
  description: string;
  img: string;
  date: string;
}

export interface PostProps {
  slugs: Array<string>;
  data: Array<data>;
}