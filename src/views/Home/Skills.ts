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
} from "../../toolbox/constants/icons";

interface ISkill {
  id: number;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: number;
  description: string;
}

export const $SKILLS_FRONTEND: ISkill[] = [
  {
    id: 1,
    name: "React",
    Icon: ReactIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Next.js",
    Icon: NextJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Vue",
    Icon: VueJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Angular",
    Icon: AngularIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "JavaScript",
    Icon: JSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "TypeScript",
    Icon: TypescriptIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Material UI",
    Icon: MuiIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "CSS",
    Icon: CSSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "HTML",
    Icon: HTMLIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "SASS",
    Icon: SASSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_BACKEND: ISkill[] = [
  {
    id: 1,
    name: "Python",
    Icon: PythonIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Django",
    Icon: DjangoIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Java",
    Icon: JavaIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Spring Boot",
    Icon: SpringBootIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "PHP",
    Icon: PHPIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Laravel",
    Icon: LaravelIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Node.js",
    Icon: NodeJSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Express.js",
    Icon: ExpressIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Golang",
    Icon: GolangIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "C#",
    Icon: CSharpIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "REST API",
    Icon: RestAPIIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "GraphQL",
    Icon: GraphQLIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_DEVOPS: ISkill[] = [
  {
    id: 1,
    name: "AWS Amplify",
    Icon: AWSIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Docker",
    Icon: DockerIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Kubernetes",
    Icon: KubernetesIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Terraform",
    Icon: TerraformIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_BD: ISkill[] = [
  {
    id: 1,
    name: "PostgresQL",
    Icon: PostgresqlIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "MySQL",
    Icon: MysqlIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "MongoDB",
    Icon: MongoDBIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "SQL Server",
    Icon: SQLServerIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "GitHub",
    Icon: GitHubColorIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Gitlab",
    Icon: GitlabIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_MOBILE: ISkill[] = [
  {
    id: 1,
    name: "Flutter",
    Icon: FlutterIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Dart",
    Icon: DartIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_TOOLS: ISkill[] = [
  {
    id: 1,
    name: "Git",
    Icon: GitIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Jira",
    Icon: JiraIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Visual Studio Code",
    Icon: VSCIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Postman",
    Icon: PostmanIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const $SKILLS_DESIGN: ISkill[] = [
  {
    id: 1,
    name: "Illustrator",
    Icon: IllustratorIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Photoshop",
    Icon: PhotoshopIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 1,
    name: "Premiere Pro",
    Icon: PremiereProIcon,
    category: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
