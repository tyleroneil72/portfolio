import { IconType } from 'react-icons';
import { FaAws, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaNodeJs, FaReact, FaTools } from 'react-icons/fa';
import {
  SiDotnet,
  SiExpress,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiSpringboot,
  SiTypescript
} from 'react-icons/si';

export const skillIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: FaJava,
  'C#': SiDotnet,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  Node: FaNodeJs,
  Express: SiExpress,
  'Spring Boot': SiSpringboot,
  '.NET': SiDotnet,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Docker: FaDocker,
  Postman: SiPostman,
  Git: FaGitAlt,
  Jenkins: SiJenkins,
  Jira: SiJira,
  AWS: FaAws,
  Agile: FaTools,
  'Unit Testing': FaTools
};
