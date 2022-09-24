import React from "react";
import {
  VueJSIcon,
  ReactIcon,
  TypescriptIcon,
  SpringBootIcon,
  PythonIcon,
  DjangoIcon,
  GolangIcon,
  GitIcon,
  IllustratorIcon,
  PhotoshopIcon,
  PremiereProIcon,
  MuiIcon,
  CSSIcon,
  HTMLIcon,
  SASSIcon,
  PHPIcon,
  NodeJSIcon,
  CSharpIcon,
  GraphQLIcon,
  AWSIcon,
  DockerIcon,
  TerraformIcon,
  PostgresqlIcon,
  MysqlIcon,
  MongoDBIcon,
  SQLServerIcon,
  GitHubColorIcon,
  VSCIcon,
  GitlabIcon,
  JSIcon,
  JavaIcon,
  JiraIcon,
  KubernetesIcon,
  AngularIcon,
  PostmanIcon,
  DartIcon,
  NextJSIcon,
  RestAPIIcon,
  LaravelIcon,
  ExpressIcon,
  FlutterIcon,
  NestJSIcon,
  GinGonicIcon,
  AwsAmplifyIcon,
} from "../../toolbox/constants/icons";
import { v4 as uuidv4 } from "uuid";

interface ISkill {
  id: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: number;
  description: string;
}

export const $SKILLS_FRONTEND: ISkill[] = [
  {
    id: uuidv4(),
    name: "React",
    Icon: ReactIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Next.js",
    Icon: NextJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Vue",
    Icon: VueJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Angular",
    Icon: AngularIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "TypeScript",
    Icon: TypescriptIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Material UI",
    Icon: MuiIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "CSS",
    Icon: CSSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "HTML",
    Icon: HTMLIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "SASS",
    Icon: SASSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_BACKEND: ISkill[] = [
  {
    id: uuidv4(),
    name: "Python",
    Icon: PythonIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Django",
    Icon: DjangoIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Java",
    Icon: JavaIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Spring Boot",
    Icon: SpringBootIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "PHP",
    Icon: PHPIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Laravel",
    Icon: LaravelIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Node.js",
    Icon: NodeJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Express",
    Icon: ExpressIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Nest.js",
    Icon: NestJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Golang",
    Icon: GolangIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Gin",
    Icon: GinGonicIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "C#",
    Icon: CSharpIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "REST API",
    Icon: RestAPIIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "GraphQL",
    Icon: GraphQLIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_DEVOPS: ISkill[] = [
  {
    id: uuidv4(),
    name: "AWS Amplify",
    Icon: AwsAmplifyIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Docker",
    Icon: DockerIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Kubernetes",
    Icon: KubernetesIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Terraform",
    Icon: TerraformIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_BD: ISkill[] = [
  {
    id: uuidv4(),
    name: "PostgresQL",
    Icon: PostgresqlIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "MySQL",
    Icon: MysqlIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "MongoDB",
    Icon: MongoDBIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "SQL Server",
    Icon: SQLServerIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_MOBILE: ISkill[] = [
  {
    id: uuidv4(),
    name: "Flutter",
    Icon: FlutterIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Dart",
    Icon: DartIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_TOOLS: ISkill[] = [
  {
    id: uuidv4(),
    name: "Git",
    Icon: GitIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "GitHub",
    Icon: GitHubColorIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Gitlab",
    Icon: GitlabIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Jira",
    Icon: JiraIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Visual Studio Code",
    Icon: VSCIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Postman",
    Icon: PostmanIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_DESIGN: ISkill[] = [
  {
    id: uuidv4(),
    name: "Illustrator",
    Icon: IllustratorIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Photoshop",
    Icon: PhotoshopIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: uuidv4(),
    name: "Premiere Pro",
    Icon: PremiereProIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
